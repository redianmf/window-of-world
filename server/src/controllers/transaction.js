// Controllers
const { users, transactions } = require('../../models');

exports.addTransaction = async (req,res) => {
    const {...data} = req.body;

    try {
        const hasUpload = await transactions.findOne({
            where: {
                user_id: req.user.id,
                paymentStatus: "Pending",
            }
        })

        if(hasUpload) {
            return res.send({
                status: 'failed',
                message: 'You already sent transfer proof, please wait for admin verification',
            })
        }

        const newTransaction = await transactions.create({
            ...data,
            transferProof: process.env.IMG_PATH + req.file.filename,
            remainingActive: 0,
            userStatus: "Not Active",
            paymentStatus: "Pending",
            user_id: req.user.id,
        });

        const transaction= await transactions.findOne({
            where: {
                id: newTransaction.id,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'book_id', 'admin_id', 'user_id'],
            },
            include: [{
                model: users,
                    as: 'user',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'email', 'password', 'role',]
                    }
            }]
        })

        res.send({
            status: 'success',
            data: {
                transaction: {
                    id: transaction.id,
                    user: transaction.user,
                },
                transferProof: transaction.transferProof,
                remainingActive: transaction.remainingActive,
                userStatus: transaction.userStatus,
                paymentStatus: transaction.paymentStatus,
            }
        });

    } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.editTransaction = async (req,res) => {
    const {...data} = req.body;
    const {id} = req.params;

    try {  
        const transactionApprove = {
            paymentStatus: 'Approve',
            remainingActive: 30,
            userStatus: 'Active',
        }

        const transactionCancel = {
            paymentStatus: 'Cancel',
            remainingActive: 0,
            userStatus: 'Not Active',
        }

        if(data.paymentStatus == "Approve"){
            await transactions.update(transactionApprove, {
                where: {
                    id,
                },
            });
        } else {
            await transactions.update(transactionCancel, {
                where: {
                    id,
                },
            });
            
        }

        const transaction= await transactions.findOne({
            where: {
                id,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'book_id', 'admin_id', 'user_id'],
            },
            include: [{
                model: users,
                    as: 'user',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt', 'email', 'password', 'role',]
                    }
            }]
        })

        res.send({
            status: 'success',
            data: {
                transaction: {
                    id: transaction.id,
                    user: transaction.user,
                },
                transferProof: transaction.transferProof,
                remainingActive: transaction.remainingActive,
                userStatus: transaction.userStatus,
                paymentStatus: transaction.paymentStatus,
            }
        });

    } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

exports.getTransaction = async (req,res) => {
    const {id} = req.params;

try {
    const transaction= await transactions.findOne({
        where: {
            id,
        },
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'book_id', 'admin_id', 'user_id'],
        },
        include: [{
            model: users,
                as: 'user',
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'email', 'password', 'role',]
                }
        }]
    })

    res.send({
        status: 'success',
        data: {
            transaction: {
                id: transaction.id,
                user: transaction.user,
            },
            transferProof: transaction.transferProof,
            remainingActive: transaction.remainingActive,
            userStatus: transaction.userStatus,
            paymentStatus: transaction.paymentStatus,
        }
    });

} catch (error) {
        console.log(error);
        res.status(500).send({
        status: 'failed',
        message: 'Server Error',
        });
    }
};

exports.getTransactions = async (req,res) => {

try {
    const allTransactions = await transactions.findAll({
        attributes: {
            exclude: ['createdAt', 'updatedAt', 'book_id', 'admin_id', 'user_id'],
        },
        include: [{
            model: users,
                as: 'user',
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'email', 'password', 'role',]
                }
        }]
    })

    const transactionsData = allTransactions.map(function (data, index) {
        return {
            id: data.id,
                user: {
                    id: data.user.id,
                    fullName: data.user.fullName,
                },
            transferProof: data.transferProof,
            remainingActive: data.remainingActive,
            userStatus: data.userStatus,
            paymentStatus: data.paymentStatus,

        }
    });


    res.send({
        status: 'success',
        data: {
            transactions: transactionsData,
        }
    });

} catch (error) {
        console.log(error);
        res.status(500).send({
        status: 'failed',
        message: 'Server Error',
        });
    }
};
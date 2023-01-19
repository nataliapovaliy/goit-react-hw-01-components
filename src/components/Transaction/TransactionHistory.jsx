import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from './Transaction';

export default function TransactionHistory ({ items }) {
    return (
        <>
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map(item => {
                return (
                    <>
                        {<Transaction
                            id={item.id}
                            type={item.type}
                            amount={item.amount}
                            currency={item.currency} />}
                    </>
                )
            })}
        </table>
        </>
        
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    )
};

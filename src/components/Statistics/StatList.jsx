import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const StatList = ({ stats }) => {
    return (
        <ul className={css.statList}>
            {stats.map(stat => {
                return (
                    <li key={stat.id} className={css.item}>
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>{stat.percentage}%</span>
                    </li>
                )
            })}
        </ul>
    );
}

StatList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.string.isRequired,
        })
    )
}
import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { StatList } from './StatList';

export default function Statistics({title, stats}) {
    return (
        <>
        <section className={css.statistics}>
                <h2 className={css.title}>{title}</h2>
                
                {<StatList stats={stats}/>}
        </section>
        </>
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf().isRequired
};
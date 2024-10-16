import React from 'react'
import PropTypes from 'prop-types';

const Categories = React.memo(
    function Categories({ activeCategory, onclickCategory, items }) {

        return (
            <div className="categories">
                <ul>
                    <li
                        className={activeCategory === null ? 'active' : ''}
                        onClick={() => onclickCategory(null)}>
                        Все
                    </li>

                    {items &&
                        items.map((name, index) =>
                        (<li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => onclickCategory(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                        ))}
                </ul>
            </div >
        );
    }
);

Categories.propTypes = {
    //activeCategory: PropTypes.oneOf([PropTypes.number, null]),/* oneOf - ОДИН ИЗ */
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onclickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };
export default Categories;
import * as React from 'react'
//eslint-disable-next-line
import '../../styles/index.css';

const Searchbar = (props) => {
    const { serachBar, bookSearchHandler } = props;
    return (
        <div>
             <input
                    placeholder="Please Search Here (Book Number, Title)"
                    margin="normal"
                    value={serachBar}
                    onChange={bookSearchHandler} 
                    className="searchBooks"
                />
        </div>
    )
}
export default Searchbar;
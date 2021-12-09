import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchTerm = () => {

const [searchTerm, setSearchTerm] = useState('')

const searchTermHandler = (evt) => {
    evt.preventDefault()
    setSearchTerm(evt.currentTarget.value)
}

    const onFormSubmit = (evt) => {
    evt.preventDefault()
    props.videoSearch(searchTerm)

    return (  
        <div className="search-bar ui segment">
                <div className="field">
                    <label>Video Search</label>
                    <Form className="d-flex" className="product-style" onSubmit={onFormSubmit}>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        value={searchTerm}
                        onChange={searchTermHandler}
                        aria-label="Search"
                    />
                    <Button variant="dark">Search</Button>
                    </Form>
                </div>
        </div>
    );
}

export default SearchTerm;
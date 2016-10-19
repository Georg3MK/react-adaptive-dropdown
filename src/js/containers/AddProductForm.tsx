import * as React from 'react';
import { connect } from 'react-redux'

const reduxConnect: any = connect
const Field = require('redux-form').Field,
    reduxForm = require('redux-form').reduxForm,
    formValueSelector = require('redux-form').formValueSelector

let AddProductForm = (props: any) => {
    const {
        productCategoryValue,
        productModelValue,
        productManufacturerValue,
        productPriceValue,
        productQuantityValue,
        productSupplierValue,
        productSupplyDateValue,
        handleSubmit,
        pristine,
        reset,
        submitting
    } = props

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <div>
                <label>Product Category</label>
                <div>
                    <Field name="productCategory" component="select">
                        <option value="none">Select category</option>
                        <option value="phones">Phones</option>
                        <option value="computers">Computers</option>
                        <option value="power-banks">Power Banks</option>
                        <option value="memory-cards">Memory Cards</option>
                    </Field>
                </div>
            </div>
            {productCategoryValue !== 'none' && <div>
                <div>
                    <label>Product Model</label>
                    <div>
                        <Field name="productModel" component="input" type="text" placeholder="Product Model"/>
                    </div>
                </div>
                <div>
                    <label>Product Manufacturer</label>
                    <div>
                        <Field name="productManufacturer" component="input" type="text" placeholder="Product Manufacturer"/>
                    </div>
                </div>
                <div>
                    <label>Product Price</label>
                    <div>
                        <Field name="productPrice" component="input" type="text" placeholder="Product Price"/>
                    </div>
                </div>
                <div>
                    <label>Product Quantity</label>
                    <div>
                        <Field name="productQuantity" component="input" type="text" placeholder="Product Quantity"/>
                    </div>
                </div>
                <div>
                    <label>Product Supplier</label>
                    <div>
                        <Field name="productSupplier" component="input" type="text" placeholder="Product Supplier"/>
                    </div>
                </div>
                <div>
                    <label>Product Supply Date</label>
                    <div>
                        <Field name="productSupplyDate" component="input" type="text" placeholder="Product Supply Date"/>
                    </div>
                </div>
            </div>}


            <div>
                <button type="submit" disabled={pristine || submitting}>Submit {productModelValue}</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}

// Decorate with redux-form
AddProductForm = reduxForm({
    form: 'addProductValues'  // a unique identifier for this form
})(AddProductForm)

// Decorate with connect to read form values
const selector = formValueSelector('addProductValues') // <-- same as form name

AddProductForm = reduxConnect(
    (state: Object) => {
        const productCategoryValue = selector(state, 'productCategory')
        const {
            productModelValue,
            productManufacturerValue,
            productPriceValue,
            productQuantityValue,
            productSupplierValue,
            productSupplyDateValue
        } = selector(state, 'productModel', 'productManufacturer', 'productPrice', 'productQuantity', 'productSupplier', 'productSupplyDate')

        return {
            productCategoryValue,
            productModelValue,
            productManufacturerValue,
            productPriceValue,
            productQuantityValue,
            productSupplierValue,
            productSupplyDateValue
        }
    }
)(AddProductForm)

export default AddProductForm
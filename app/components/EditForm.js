import React from 'react'

const editForm = ({ forms, onSubmit, submitText = 'Submit', dropdown }) => {

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            {forms.map(({ label, name, placeholder }) =>
                <div className="form-group" key={name}>
                    <label className="col-sm-2 control-label">{label}</label>
                    <div className="col-sm-10">
                        <input name={name} type="text" className="form-control" placeholder={placeholder} />
                    </div>
                </div>)}

            {dropdown && dropdown.haveDropdown && dropdown.items.length ?
                <div className="form-group">
                    <label className="col-sm-2 control-label">{dropdown.label}:</label>
                    <div className="col-sm-10">
                        <select name='select' className="form-control">
                            {dropdown.items.map(item =>
                                <option key={item.id} value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                </div>
                : ''}

            <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary">{submitText}</button>
            </div>
        </form>
    )
}

export default editForm

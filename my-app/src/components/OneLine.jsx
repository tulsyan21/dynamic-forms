import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const OneLine = ({ index, field, setField, name, placeholder }) => {
    const handleChange = (index, event) => {
        const values = [...field];
        values[index][event.target.name] = event.target.value;
        setField(values);
    }

    const handleAddFields = () => {
        setField([...field, { [name]: '' }])
    }

    function handleRemoveFields(index) {
        const values = [...field];
        values.splice(index, 1);
        setField(values);
    }

    return (
        <div>
            <TextField
                name={name}
                placeholder={placeholder}
                onChange={event => handleChange(index, event)}
            />
            <IconButton
                onClick={() => handleRemoveFields(index)}
            >
                <RemoveIcon />
            </IconButton>
            <IconButton
                onClick={() => handleAddFields()}
            >
                <AddIcon />
            </IconButton>
        </div>
    )
}

export default OneLine;
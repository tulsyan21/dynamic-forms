import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { TextareaAutosize } from '@material-ui/core';

const TitleAndContent = ({ index, field, setField, name }) => {
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
                placeholder="Title"
                onChange={event => handleChange(index, event)}
            />
            <TextareaAutosize
                name={name}
                placeholder="Content"
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

export default TitleAndContent;
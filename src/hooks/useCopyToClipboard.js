import { useState } from "react";
import copy from 'react-copy-to-clipboard'

export default function useCopyToClipboard() {
    const [value, setValue] = useState()
    const [success, setSucces] = useState()

    const copyToClipboard = (text, options) => {
        const result = copy(text, options)
        if(result) setValue(text)
        setSucces(result)
    }

    return [copyToClipboard, { value, success }]
}
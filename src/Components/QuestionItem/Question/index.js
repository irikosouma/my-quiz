import React from 'react'
//styles 
import {Wrap} from './index.styles'

export default function Question(listQuestion) {
    return (
        <Wrap dangerouslySetInnerHTML={{__html: listQuestion.listQuestion}}> 
        </Wrap>
    )
}

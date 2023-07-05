import * as React from 'react';
import { useEffect, useRef, useState } from 'react'
import {useMutation} from "@apollo/client";
import './AddNewGroupForm.scss';
import { CREATE_MY_ROOM, GET_ALL_MY_ROOMS } from '@shared/schemas/messages/messages'
import { CreateMyRoomDocument } from '@shared/lib/types/__generated-types__/graphql'

interface IAddNewGroupFormProps {
    onClose: (value: boolean) => void
}

export const AddNewGroupForm = ({onClose}: IAddNewGroupFormProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [value, setValue] = useState('')
    const [createRoom] = useMutation(CreateMyRoomDocument, {refetchQueries: [GET_ALL_MY_ROOMS]})

    const handleCreateRoom = () => {
        if (value.length > 0) {
            createRoom({
                variables: {
                    input: {
                        title: value,
                        description: 'new room'
                    }
                }
            }).then((v) => console.log(v))
        }
        setValue('')
        onClose(false)
    }

    useEffect(() => {
        inputRef?.current?.focus()
    }, [])


    return (
        <div className="modalNewGroup">
            <div className="modalNewGroup__title">Enter your group name</div>
            <input
                ref={inputRef}
                type="text"
                className="modalNewGroup__name"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button className="modalNewGroup__button" onClick={handleCreateRoom}>
                Create Group
            </button>
        </div>
    );
};

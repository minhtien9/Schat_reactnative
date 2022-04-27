import React, { useState, useRef, useCallback, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'

const MessagesList = (props) => {
    const { accessToken } = useSelector((state) => state.userReducer)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            console.log('id' + props.value.id)
            try {
                const socket = await io('http://172.21.20.67:3000', {
                    extraHeaders: {
                        Authorization: 'Bearer ' + accessToken,
                    },
                })
                socket.emit('joinRoom', props.value.id)
                // setMessages[[]]
                // console.log(messages)
                socket.on('showAllChatOnRoom', async (allMessages) => {
                    setMessages(allMessages)
                    console.log(messages)
                })
            } catch (error) {
                console.log(error)
            }
            setIsBusy(false)
        }
        fetchData()
    }, [])

    useEffect(() => {
        return () => {
            console.log('cleaned up')
        }
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        )
    }, [])

    return (
        <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
                _id: 1,
            }}
        />
    )
}

const styles = StyleSheet.create({})

export default MessagesList
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
// import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { useState } from 'react'
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Pressable,
    FlatList,
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const data = [
    { name: 'Rohan', contact: '1111111111', id: '1' },
    { name: 'Mohan', contact: '2222222222', id: '2' },
    { name: 'Sohan', contact: '3333333333', id: '3' },
    { name: 'Hohan', contact: '4444444444', id: '4' },
    { name: 'Dohan', contact: '5555555555', id: '5' },
    { name: 'Pohan', contact: '6666666666', id: '6' },
]

const ListItem = ({ item, selected, onPress, onLongPress }) => (
    <>
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.listItem}
        >
            <View style={{ padding: 8 }}>
                <Text style={{ fontSize: 22, color: '#fff' }}>{item.name}</Text>
                <Text style={{ color: '#989BA1' }}>{item.contact}</Text>
            </View>
            {selected && <View style={styles.overlay} />}
        </TouchableOpacity>
    </>
)

const Details = () => {
    const [field, setField] = useState('')
    const [workingGroup, setWorkingGroup] = useState('')
    const [nameGroup, setNameGroup] = useState('Thiết kế CSDL Ver.1')
    const [percent, setPercent] = useState(0)
    const [text, setText] = useState('Không thời hạn')
    const [isVisible, setIsVisible] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [status, setStatus] = useState('')

    const handlePicker = (datetime) => {
        setShowButton(true)
        setIsVisible(false)
        setText(moment(datetime).format('DD/MM/YYYY HH:mm'))
    }

    const showPicker = () => {
        setIsVisible(true)
    }

    const hidePicker = () => {
        setIsVisible(false)
    }

    const hideButton = () => {
        setText('Không thời hạn')
        setShowButton(false)
    }

    const [selectedItems, setSelectedItems] = useState([])
    const handleOnPress = (contact) => {
        if (selectedItems.length) {
            return selectItems(contact)
        }

        // here you can add you code what do you want if user just do single tap
        console.log('pressed')
    }

    const getSelected = (contact) => selectedItems.includes(contact.id)

    const deSelectItems = () => setSelectedItems([])

    const selectItems = (item) => {
        if (selectedItems.includes(item.id)) {
            const newListItems = selectedItems.filter(
                (listItem) => listItem !== item.id
            )
            return setSelectedItems([...newListItems])
        }
        setSelectedItems([...selectedItems, item.id])
    }

    return (
        <View>
            <ScrollView nestedScrollEnabled={true} style={styles.screen}>
                <View style={styles.currentProgress}>
                    <Text style={styles.textProgress}>Tiến độ hiện tại</Text>
                    <View style={styles.TienDo}>
                        <TextInput
                            style={styles.textPercent}
                            keyboardType={'number-pad'}
                            maxLength={3}
                            contextMenuHidden={true}
                            onChangeText={(text) => {
                                if (+text > 100) text = 100
                                setPercent(Number(text))
                            }}
                        >
                            {percent}
                        </TextInput>
                        <Text style={styles.txtPer}>%</Text>
                    </View>
                    <Slider
                        style={styles.percentBar}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor='#27AAE1'
                        maximumTrackTintColor='#D6D6D6'
                        thumbTintColor='#27AAE1'
                        value={percent}
                        step={1}
                        onValueChange={setPercent}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.textProgress}>Lĩnh vực</Text>

                    <Picker
                        selectedValue={field}
                        style={{ height: 50, width: '50%' }}
                        onValueChange={(itemValue, itemIndex) =>
                            setField(itemValue)
                        }
                    >
                        <Picker.Item
                            label='Lập trình viên'
                            value='Lập trình viên'
                        />
                        <Picker.Item label='Hành chính' value='Hành chính' />
                        <Picker.Item label='Chính trị' value='Chính trị' />
                        <Picker.Item label='Quân sự' value='Quân sự' />
                    </Picker>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textProgress}>Nhóm công việc</Text>

                    <Picker
                        selectedValue={workingGroup}
                        style={{ height: 50, width: '50%' }}
                        onValueChange={(itemValue, itemIndex) =>
                            setWorkingGroup(itemValue)
                        }
                    >
                        <Picker.Item label='Nhóm Design' value='Nhóm Design' />
                        <Picker.Item label='Nhóm Dev' value='Nhóm Dev' />
                        <Picker.Item label='Nhóm BA' value='Nhóm BA' />
                        <Picker.Item label='Nhóm IT' value='Nhóm IT' />
                    </Picker>
                </View>
                <View style={styles.container}>
                    <Text style={styles.textProgress}>Tên công việc</Text>
                    <TextInput
                        style={styles.textContent}
                        value={nameGroup}
                        onChangeText={setNameGroup}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.textProgress}>Nội dung</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={styles.textContent}
                        placeholder=' Nhập nội dung công việc...'
                    />
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.buttonContainer}>
                            <MaterialIcons
                                name='attach-file'
                                size={23}
                                style={styles.iconUpfile}
                            />
                            <Text style={styles.textUpfile}>
                                Tải file đính kèm
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.currentProgress}>
                    <Text style={styles.textProgress}>Trạng thái</Text>
                    <Picker
                        selectedValue={status}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            setStatus(itemValue)
                        }
                    >
                        <Picker.Item
                            label='Cần thực hiện'
                            value='Cần thực hiện'
                        />
                        <Picker.Item
                            label='Đang thực hiện'
                            value='Đang thực hiện'
                        />
                        <Picker.Item
                            label='Đã hoàn thành'
                            value='Đã hoàn thành'
                        />
                        <Picker.Item
                            label='Đã phê duyệt'
                            value='Đã phê duyệt'
                        />
                        <Picker.Item
                            label='Việc giao cho tôi'
                            value='Việc giao cho tôi'
                        />
                        <Picker.Item
                            label='Việc tôi giao'
                            value='Việc tôi giao'
                        />
                    </Picker>
                </View>
                <View style={styles.currentProgress}>
                    <Text style={styles.textProgress}>Thời hạn</Text>
                    <TouchableOpacity onPress={showPicker}>
                        <Text style={styles.textStatus}>{text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={hideButton}>
                        {showButton ? (
                            <AntDesign
                                name='close'
                                size={26}
                                style={{
                                    color: '#ccc',
                                    marginHorizontal: 70,
                                    marginTop: 10,
                                    padding: 10,
                                }}
                            />
                        ) : null}
                    </TouchableOpacity>
                </View>

                <DateTimePickerModal
                    isVisible={isVisible}
                    onConfirm={handlePicker}
                    onCancel={hidePicker}
                    mode={'datetime'}
                    is24Hour={false}
                />
                <View style={styles.currentProgress}>
                    <Text style={styles.textProgress}>Người được giao</Text>
                </View>
            </ScrollView>

            <View style={styles.textContainer}>
                <Pressable
                    onPress={deSelectItems}
                    style={{ flex: 1, padding: 15 }}
                >
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <ListItem
                                onPress={() => handleOnPress(item)}
                                onLongPress={() => selectItems(item)}
                                selected={getSelected(item)}
                                item={item}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default Details

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#252628',
        marginBottom: 10,
        borderRadius: 5,
        overflow: 'hidden',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,0,0,0.5)',
    },
    screen: {
        backgroundColor: '#fff',
        margin: 16,
        padding: 16,
        fontFamily: 'roboto-regular',
        borderRadius: 10,
        position: 'relative',
    },

    currentProgress: {
        position: 'relative',
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
        borderStyle: 'solid',
        paddingBottom: 20,
    },
    textProgress: {
        fontSize: 12,
        lineHeight: 14,
        alignItems: 'center',
        color: '#919191',
        marginTop: 10,
    },
    textPercent: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: '#FA1919',
        color: '#fff',
        borderRadius: 50,
        marginLeft: 10,
        fontSize: 14,
        textAlign: 'center',
        marginTop: -10,
    },
    textContent: {
        color: '#000',
        borderRadius: 50,
        marginTop: 10,
        fontSize: 14,
    },

    textDesign: {
        color: '#27AAE1',
        marginTop: 10,
        fontSize: 14,
        // lineHeight: 16.41,
    },

    textStatus: {
        color: '#fff',
        marginTop: 10,
        fontSize: 14,
        backgroundColor: '#27AAE1',
        borderRadius: 50,
        marginLeft: 20,
        padding: 10,
        // height: 50,
        // width: '50%',
    },
    container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#D3D3D3',
        borderStyle: 'solid',
        paddingBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

        marginTop: 16,
        borderWidth: 0.7,
        borderColor: '#27AAE1',
        borderStyle: 'solid',
        padding: 10,
        borderRadius: 10,
    },
    textUpfile: {
        color: '#27aae1',
        fontSize: 14,
        marginLeft: 5,
    },
    iconUpfile: { color: '#27aae1', transform: [{ rotate: '40deg' }] },
    textContainer: { flexDirection: 'row' },
    userContainer: {
        flexDirection: 'row',
        marginLeft: 30,
        alignItems: 'center',
        textAlign: 'center',
    },
    textUser: { marginRight: 12 },
    TienDo: {
        marginTop: 20,
        marginLeft: 10,
        flexDirection: 'row',
    },
    txtTiendo: {
        fontSize: 14,
        color: '#353535',
    },
    txtinputPer: {
        textAlign: 'center',
        fontSize: 14,
        color: '#353535',
        marginLeft: 12,
        borderWidth: 1,
        width: 48,
        height: 28,
        marginTop: -6,
        borderRadius: 8,
        borderColor: '#27AAE1',
    },
    txtPer: {
        fontSize: 14,
        color: '#353535',
        marginLeft: 10,
    },
    percentBar: {
        marginTop: 10,
        width: '40%',
    },
    pickerStyle: {
        height: 50,
        width: '60%',
        marginHorizontal: 10,
        marginTop: 7,
        color: 'red',
    },
})

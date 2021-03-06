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
} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import MultiSelect from 'react-native-multiple-select'

const DATA = [
    {
        id: '92iijs7yta',
        name: 'Ondo',
    },
    {
        id: 'a0s0a8ssbsd',
        name: 'Ogun',
    },
    {
        id: '16hbajsabsd',
        name: 'Calabar',
    },
    {
        id: 'nahs75a5sg',
        name: 'Lagos',
    },
]

const Item = ({ item }) => {
    <MultiSelect
                        items={Item}
                        uniqueKey='id'
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText='Pick Items'
                        searchInputPlaceholderText='Search Items...'
                        onChangeInput={(text) => console.warn(text)}
                        tagRemoveIconColor='#CCC'
                        tagBorderColor='#CCC'
                        tagTextColor='#CCC'
                        selectedItemTextColor='#CCC'
                        selectedItemIconColor='#CCC'
                        itemTextColor='#000'
                        displayKey='name'
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor='#CCC'
                        submitButtonText='Submit'
                        removeSelected
                    />
}
const Details = () => {
    const [field, setField] = useState('')
    const [workingGroup, setWorkingGroup] = useState('')
    const [nameGroup, setNameGroup] = useState('Thi???t k??? CSDL Ver.1')
    const [percent, setPercent] = useState(0)
    const [text, setText] = useState('Kh??ng th???i h???n')
    const [isVisible, setIsVisible] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [status, setStatus] = useState('')

    const handlePickerTime = (datetime) => {
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
        setText('Kh??ng th???i h???n')
        setShowButton(false)
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Ti???n ????? hi???n t???i</Text>
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
                <Text style={styles.textProgress}>L??nh v???c</Text>

                <Picker
                    selectedValue={field}
                    style={{ height: 50, width: '50%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setField(itemValue)
                    }
                >
                    <Picker.Item
                        label='L???p tr??nh vi??n'
                        value='L???p tr??nh vi??n'
                    />
                    <Picker.Item label='H??nh ch??nh' value='H??nh ch??nh' />
                    <Picker.Item label='Ch??nh tr???' value='Ch??nh tr???' />
                    <Picker.Item label='Qu??n s???' value='Qu??n s???' />
                </Picker>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>Nh??m c??ng vi???c</Text>

                <Picker
                    selectedValue={workingGroup}
                    style={{ height: 50, width: '50%' }}
                    onValueChange={(itemValue, itemIndex) =>
                        setWorkingGroup(itemValue)
                    }
                >
                    <Picker.Item label='Nh??m Design' value='Nh??m Design' />
                    <Picker.Item label='Nh??m Dev' value='Nh??m Dev' />
                    <Picker.Item label='Nh??m BA' value='Nh??m BA' />
                    <Picker.Item label='Nh??m IT' value='Nh??m IT' />
                </Picker>
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>T??n c??ng vi???c</Text>
                <TextInput
                    style={styles.textContent}
                    value={nameGroup}
                    onChangeText={setNameGroup}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.textProgress}>N???i dung</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textContent}
                    placeholder=' Nh???p n???i dung c??ng vi???c...'
                />
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.buttonContainer}>
                        <MaterialIcons
                            name='attach-file'
                            size={23}
                            style={styles.iconUpfile}
                        />
                        <Text style={styles.textUpfile}>T???i file ????nh k??m</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Tr???ng th??i</Text>
                <Picker
                    selectedValue={status}
                    style={styles.pickerStyle}
                    onValueChange={(itemValue, itemIndex) =>
                        setStatus(itemValue)
                    }
                >
                    <Picker.Item label='C???n th???c hi???n' value='C???n th???c hi???n' />
                    <Picker.Item
                        label='??ang th???c hi???n'
                        value='??ang th???c hi???n'
                    />
                    <Picker.Item label='???? ho??n th??nh' value='???? ho??n th??nh' />
                    <Picker.Item label='???? ph?? duy???t' value='???? ph?? duy???t' />
                    <Picker.Item
                        label='Vi???c giao cho t??i'
                        value='Vi???c giao cho t??i'
                    />
                    <Picker.Item label='Vi???c t??i giao' value='Vi???c t??i giao' />
                </Picker>
            </View>
            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Th???i h???n</Text>
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
                onConfirm={handlePickerTime}
                onCancel={hidePicker}
                mode={'datetime'}
                is24Hour={false}
            />

            <View style={styles.currentProgress}>
                <Text style={styles.textProgress}>Ng?????i ???????c giao</Text>
                <View style={styles.textContainer}></View>
            </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({
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

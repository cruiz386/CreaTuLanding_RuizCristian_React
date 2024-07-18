
const products = [
    {
        id: 1,
        name: 'Amazon Echo Show 8 (2nd Gen)',
        description: 'Descricpcion de GoogleNestHubMax',
        price: '130', 
        image: './src/assets/smart_display/GoogleNestHubMax.jfif',
        category: 'Smart-Display'
    },

    {
        id: 2,
        name: 'Facebook Portal',
        description: 'Pantalla inteligente enfocada en videollamadas',
        price: '150', 
        image: './src/assets/smart_display/Facebook-Portal.jpg',
        category: 'Smart-Display'
    },

    {
        id: 3,
        name: 'Google Nest Hub (2nd Gen)',
        description: 'Pantalla inteligente de 7 pulgadas con Google Assistant',
        price: '180', 
        image: './src/assets/smart_display/GoogleNestHub.jpg',
        category: 'Smart-Display'
    },

    {
        id: 4,
        name: 'Arlo Pro 3',
        description: 'Descripcion de ArloPro3',
        price: '180', 
        image: './src/assets/smart_cam/ArloPro3.jpg',
        category: 'Smart-Cam'
    },

    {
        id: 5,
        name: 'Blink Outdoor',
        description: 'Descripcion de BlinkOutdoor',
        price: '180', 
        image: './src/assets/smart_cam/BlinkOutdoor.jpg',
        category: 'Smart-Cam'
    },

    {
        id: 6,
        name: 'LogitechCircle2',
        description: 'Descripcion de LogitechCircle2',
        price: '180', 
        image: './src/assets/smart_cam/LogitechCircle2.jpg',
        category: 'Smart-Cam'
    },

    {
        id: 7,
        name: 'Apple Home Pod Mini',
        description: 'Descripcion de AppleHomePodMini',
        price: '180', 
        image: './src/assets/smart_assistant/AppleHomePodMini.JPEG',
        category: 'Smart-Assistant'
    },

    {
        id: 8,
        name: 'Bose Home Speaker 500',
        description: 'Descripcion de BoseHomeSpeaker500',
        price: '180', 
        image: './src/assets/smart_assistant/BoseHomeSpeaker500.jpg',
        category: 'Smart-Assistant'
    },

    {
        id: 9,
        name: 'Harman Kardon Citation One',
        description: 'Descripcion de Harman Kardon Citation One',
        price: '180', 
        image: './src/assets/smart_assistant/HarmanKardonCitationOne.jpg',
        category: 'Smart-Assistant'
    },

    {
        id: 10,
        name: 'GE-CyncSmart LED',
        description: 'Descripcion de GE-CyncSmart LED Bulb',
        price: '180', 
        image: './src/assets/smart_light/GE-CyncSmartLEDBulb.JPEG',
        category: 'Smart-Light'
    }
    ,

    {
        id: 11,
        name: 'Kasa Smart Light Bulb TP-Link',
        description: 'Descripcion de Kasa Smart Light Bulb TP-Link',
        price: '180', 
        image: './src/assets/smart_light/KasaSmartLightBulbTP-Link.jfif',
        category: 'Smart-Light'
    }
    ,

    {
        id: 12,
        name: 'LIFX A19 LED Smart Bulb',
        description: 'Descripcion de LIFX A19 LED Smart Bulb',
        price: '180', 
        image: './src/assets/smart_light/LIFX-A19-LEDSmartBulb.jpg',
        category: 'Smart-Light'
    },

    {
        id: 13,
        name: 'Amazon Smart Plug',
        description: 'Descripcion de Amazon Smart Plug',
        price: '180', 
        image: './src/assets/smart_plug/AmazonSmartPlug.jpg',
        category: 'Smart-Plug'
    },

    {
        id: 14,
        name: 'Eufy Smart Plug Mini',
        description: 'Descripcion de Eufy Smart Plug Mini',
        price: '180', 
        image: './src/assets/smart_plug/EufySmartPlugMini.JPEG',
        category: 'Smart-Plug'
    },

    {
        id: 15,
        name: 'Gosund Smart Plug',
        description: 'Descripcion de Gosund Smart Plug',
        price: '180', 
        image: './src/assets/smart_plug/GosundSmartPlug.JPEG',
        category: 'Smart-Plug'
    }

];



export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products);
        }, 3000);
    });
};



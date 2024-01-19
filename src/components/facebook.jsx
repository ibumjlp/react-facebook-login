import { useState } from 'react';
import { prettyPrintJson } from 'pretty-print-json';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
    const [response, setResponse] = useState(null)

    const componentClicked = () => {
        console.log('click')
    }

    const responseFacebook = (response) => {
        setResponse(response);
    }

    const style = {
        container: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        },
        codeBox: {
            marginTop: '2rem',
            width: '50vw',
            height: '50vh',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            border: '1px solid #d1d1d1',
            borderRadius: '1rem',
            overflow: 'auto',
        },
    }

    return (
        <div style={style.container}>
            <FacebookLogin
                appId={process.env.REACT_APP_META_APP_ID}
                // autoLoad={true}
                fields="email,picture"
                onClick={componentClicked}
                callback={responseFacebook}
            />
            <div style={style.codeBox}>
                <div dangerouslySetInnerHTML={{ __html: prettyPrintJson.toHtml(response) }} />
            </div>
        </div>
    )
}

export default Facebook;
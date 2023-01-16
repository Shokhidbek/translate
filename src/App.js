import React, { useState } from 'react'
import { useTranslation  } from 'react-i18next';
import {Button} from '@mui/material'



const App = () => {
    const [active , setActive] = useState('ru')
    const { t ,  i18n} = useTranslation()
     const lngs = {
        en:{lngName:"Engilish"},
        uz:{lngName:"Uzbek"},
        ru:{lngName:"Russcha"}
     }

    return (
        <div>
            {
                Object.keys(lngs).map((lng) => (
                <button 
                key={lng}
                onClick={() => {
                    i18n.changeLanguage(lng)
                    setActive(lng)
                }}
                disabled={i18n.reloadResources === lng}
                className={` default ${(active === lng)? "active" : ""}`}
                >{lngs[lng].lngName}</button>
                ))
            }
            <h1>
                {t('dunyo')}
            </h1>
            <h1>
                {t('dunyo')}
            </h1>
            <h1>
                {t('dunyo')}
            </h1>
            <h1>
                {t('dunyo')}
            </h1>
            <p>
                {t('someText')}
            </p>

            <Button className={``} variant='outlined' color={`${active === 'ru' ? "success" : "primary"}`}>
                Hello
            </Button>
        </div>
    )
}

export default App
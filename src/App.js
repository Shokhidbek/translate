import React, { useState } from 'react'
import { useTranslation  } from 'react-i18next';

const App = () => {
    const [active , setActive] = useState('en')
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
        </div>
    )
}

export default App
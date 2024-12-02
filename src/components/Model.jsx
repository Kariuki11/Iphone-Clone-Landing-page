import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import { useState } from "react"
import { yellowImg } from "../utils"

const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'Iphone 16 pro in Neutral Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg
    })

    //Camera Control

    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 })
    }, [])
  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1 id="heading" className='section-heading'>Take A Look!</h1>

            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model
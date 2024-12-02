import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "./ModelView"
import { useState } from "react"
import { yellowImg } from "../utils"

import * as THREE from 'three'

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

    //Model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //Rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 })
    }, [])
  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1 id="heading" className='section-heading'>Take A Look!</h1>

            <div className="flex flex-col items-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView
                        index={1}
                        groupRef={small}
                        gsapType="view1"
                        controlRef={cameraControlSmall}
                        setRoatationState={setSmallRotation}
                        item={model}
                        size={size}
                    />

                    <ModelView
                        index={2}
                        groupRef={large}
                        gsapType="view2"
                        controlRef={cameraControlLarge}
                        setRoatationState={setLargeRotation}
                        item={model}
                        size={size}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model
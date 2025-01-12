import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from './Lights';
// import Loader from './Loader';
import IPhone from './IPhone';
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      /> 

      <group ref={groupRef} name={`${index === 1} ? 'small' : 'large`} position={[0, 0 ,0]}>
        <Suspense fallback={<Loader />}>
          <IPhone 
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView






























// import { PerspectiveCamera, View } from "@react-three/drei"
// import Lights from "./Lights"
// import { Suspense } from "react"
// import IPhone from './IPhone'


// const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSize, size, item }) => {
//   return (
//     <View
//       index={index}
//       id={gsapType}
//       className={`w-full h-full $ {index === 2} ? 'right-[-100%] : ''`}
//     >
//       {/* Ambient Light */}
//       <ambientLight intensity={0.3} />

//       <PerspectiveCamera makeDefault position={[0, 0, 4]}/>

//       <Lights/>

//       <Suspense fallback={<Html><div>Loading</div></Html>}>
//         <IPhone/>
//       </Suspense>
      

//     </View>
//   )
// }

// export default ModelView


// 2hrs 28 minutes 48 seconds

// The page is broken. The model is not showing up. The error is in the console. The error is: "Error: Could not find a GLTF model in the provided gltf file." The error is in the ModelView.jsx file. The error is in the IPhone component
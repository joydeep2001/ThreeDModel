import React, { useRef, Suspense } from "react";
import { useGLTF, OrbitControls, useProgress, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="bg-black-bg text-white">{progress} % loaded</div>
    </Html>
  );
}

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models//model_part.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0}>
        <mesh
          geometry={nodes.Mesh.geometry}
          material={materials["Shape.078"]}
        />
      </group>
      <mesh
        geometry={nodes.Shape_IndexedFaceSet.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet001.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet002.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet003.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet004.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet005.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet006.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet007.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet008.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet009.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet010.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet011.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet012.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet013.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet014.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet015.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet016.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet017.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet018.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet019.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet020.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet021.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet022.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet023.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet024.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet025.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet026.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet027.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet028.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet029.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet030.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet031.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet032.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet033.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet034.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet035.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet036.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet037.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet038.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet039.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet040.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet041.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet042.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet043.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet044.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet045.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet046.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet047.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet048.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet049.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet050.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet051.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet052.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet053.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet054.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet055.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet056.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet057.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet058.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet059.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet060.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet061.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet062.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet063.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet064.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet065.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet066.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet067.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet068.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet069.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet070.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet071.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet072.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet073.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet074.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet075.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet076.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet077.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet078.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet079.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet080.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet081.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet082.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet083.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet084.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet085.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet086.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet087.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet088.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet089.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet090.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet091.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet092.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet093.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet094.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet095.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet096.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet097.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet098.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet099.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet100.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet101.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet102.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet103.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet104.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet105.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet106.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet107.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet108.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet109.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet110.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet111.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet112.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet113.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet114.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet115.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet116.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet117.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet118.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet119.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet120.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet121.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet122.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet123.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet124.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet125.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet126.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet127.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet128.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet129.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet130.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet131.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet132.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet133.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet134.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet135.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet136.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet137.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet138.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet139.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet140.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet141.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet142.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet143.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet144.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet145.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet146.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet147.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet148.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet149.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet150.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet151.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet152.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet153.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet154.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet155.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet156.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet157.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet158.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet159.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet160.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet161.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet162.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet163.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet164.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet165.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet166.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet167.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet168.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet169.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet170.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet171.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet172.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet173.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet174.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet175.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet176.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet177.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet178.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet179.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet180.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet181.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet182.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet183.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet184.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet185.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet186.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet187.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet188.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet189.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet190.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet191.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet192.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet193.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet194.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet195.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet196.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet197.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet198.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet199.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet200.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet201.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet202.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet203.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet204.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet205.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet206.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet207.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet208.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet209.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet210.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet211.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet212.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet213.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet214.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet215.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet216.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet217.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet218.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet219.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet220.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet221.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet222.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet223.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet224.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet225.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet226.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet227.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet228.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet229.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet230.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet231.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet232.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet233.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet234.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet235.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet236.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet237.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet238.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet239.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet240.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet241.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet242.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet243.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet244.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet245.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet246.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet247.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet248.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet249.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet250.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet251.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet252.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet253.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet254.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet255.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet256.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet257.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet258.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet259.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet260.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet261.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet262.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet263.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet264.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet265.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet266.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet267.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet268.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet269.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet270.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet271.geometry}
        material={materials["Shape.542"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet272.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet273.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet274.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet275.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet276.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet277.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet278.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet279.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet280.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet281.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet282.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet283.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet284.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet285.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet286.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet287.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet288.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet289.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet290.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet291.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet292.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet293.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet294.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet295.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet296.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet297.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet298.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet299.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet300.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet301.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet302.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet303.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet304.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet305.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet306.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet307.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet308.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet309.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet310.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet311.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet312.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet313.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet314.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet315.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet316.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet317.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet318.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet319.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet320.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet321.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet322.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet323.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet324.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet325.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet326.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet327.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet328.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet329.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet330.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet331.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet332.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet333.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet334.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet335.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet336.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet337.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet338.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet339.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet340.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet341.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet342.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet343.geometry}
        material={materials["Shape.686"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet344.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet345.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet346.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet347.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet348.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet349.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet350.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet351.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet352.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet353.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet354.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet355.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet356.geometry}
        material={materials["Shape.712"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet357.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet358.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet359.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet360.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet361.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet362.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet363.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet364.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet365.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet366.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet367.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet368.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet369.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet370.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet371.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet372.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet373.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet374.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet375.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet376.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet377.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet378.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet379.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet380.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet381.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet382.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet383.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet384.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet385.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet386.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet387.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet388.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet389.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet390.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet391.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet392.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet393.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet394.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet395.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet396.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet397.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet398.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet399.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet400.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet401.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet402.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet403.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet404.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet405.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet406.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet407.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet408.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet409.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet410.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet411.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet412.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet413.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet414.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet415.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet416.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet417.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet418.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet419.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet420.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet421.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet422.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet423.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet424.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet425.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet426.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet427.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet428.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet429.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet430.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet431.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet432.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet433.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet434.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet435.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet436.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet437.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet438.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet439.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet440.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet441.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet442.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet443.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet444.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet445.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet446.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet447.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet448.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet449.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Shape_IndexedFaceSet450.geometry}
        material={materials["Shape.078"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("./models/model_part.gltf");

export default function ModelDisplay() {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <Canvas camera={{ position: [10, 2, 1], fov: 69 }}>
          <color attach="background" args={["white"]} />
          <OrbitControls />
          {/* <ambientLight position={(-3, 6, -2)} intensity={0.08} /> */}
          <directionalLight position={(4.0762,5.9039,1.0055)} intensity={0.8}/>
          
          <Suspense fallback={<Loader />}>
            <Model position={(0, 0, 0)} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

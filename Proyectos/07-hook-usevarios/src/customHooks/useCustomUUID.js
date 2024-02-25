/**
 * Custom Hook que me devuelva un UUID aleatorio y que me permite generar mas UUID.
 */

import { useState } from "react";

const useCustomUUID = () => {
  const [UUID, setUUID] = useState(generateUUID());

  function generateUUID() {
    const timeValue = Date.now();
    const randomV1 = Math.random().toString(36).substring(2);
    const randomV2 = Math.random().toString(36).substring(2);
    return `${timeValue}-${randomV1}-${randomV2}`;
  }

  return [UUID, () => setUUID(generateUUID)];
};

export default useCustomUUID;

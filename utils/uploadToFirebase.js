import { storage } from "../config";

export function uploadToFirebase(file) {
  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name)
      fileRef.put(file.file);
    }
  }
  reader.readAsDataURL(file.file);
}

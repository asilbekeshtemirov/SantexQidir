import { join } from "node:path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + `.${file.mimetype.split("/")[1]}`);
  },
});

const upload = multer({ storage });
export default upload;

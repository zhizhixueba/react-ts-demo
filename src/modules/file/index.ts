/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */
/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */
const pickerOpts = {
  types: [
    {
      description: "File",
      accept: { "application/*": [".zip", ".apk"] },
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false,
};

const allow_types = ['.zip', '.apk'];


/**
 * 选择文件
 */
export function openFilePicker() {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    
  });
}
/**
 * 选择文件
 */
export function openChooseFile() {
  // eslint-disable-next-line
  return new Promise(async (resolve) => {
    if (window.showOpenFilePicker) {
      const fileHandle = await window.showOpenFilePicker(pickerOpts);

      if (fileHandle && fileHandle.length > 0) {
        const file = await fileHandle[0].getFile();
        // const name = file.name;
        // const packName = name.substring(0, name.lastIndexOf("."));
        console.log(file);
        if (file) {
          const allow = clickFileType(file.name);
          console.log('不支持此文件类型！', file.name);
          resolve(allow ? file : null);
        } else {
          resolve(null);
        }
      }
    } else {
      const inputEle = document.createElement('input');
      inputEle.type = 'file';
      inputEle.style.display = 'node';
      inputEle.addEventListener('change', () => {
        const files = inputEle.files || [];
        console.log(files);
        if (files.length > 0) {
          const file = files[0];
          const allow = clickFileType(file.name);
          console.log('不支持此文件类型！', file.name);
          resolve(allow ? file : null);
        } else {
          resolve(null);
        }
      }, { once: true })
      inputEle.click();
    }
  });
}

function clickFileType(fileName = '') {
  const typeStr = fileName.substring(fileName.lastIndexOf("."));
  return allow_types.some(e => e == typeStr);
}
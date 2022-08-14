// Получаем имя папки проэкта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;//констанка с путем к  папки с результатом
const srcFolder = `./src`; // констанка с путем к  папки с исходником
//Общий обьект в коротом хранятся все пути к файмаи
export const path = {
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,   //помещаем в папку готового кода из папки иссходника
      images: `${buildFolder}/img/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`   //помещаем в папку готового кода из папки иссходника
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      scss: `${srcFolder}/scss/style.scss`,
      html: `${srcFolder}/*.html`,  // все файли из папки иссходника
      files: `${srcFolder}/files/**/*.*`,   // все файли из папки иссходника
      svgicons: `${srcFolder}/svgicons/*.svg`,   // все файли из папки иссходника
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      scss: `${srcFolder}/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/files/**/*.*`
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `test`
}

const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdf = async (pdf1,pdf2) => {
  await merger.add(pdf1);  
  await merger.add(pdf2); 

    const dateName= new Date().getTime();
  await merger.save(`public/${dateName}.pdf`); //save under given name and reset the internal document
    return dateName;
};

module.exports=mergePdf;
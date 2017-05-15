var mkdirp = require('mkdirp');
var fs = require('fs');
function generateStructure(json) {
	var folderStructure = json.structure;
	structureGenerator(folderStructure,'');
}

function structureGenerator(structure_json,f_path){
	for(var f_index=0; f_index<structure_json.length; f_index++){
		var folderPath = f_path+structure_json[f_index].name;
		try{
			var num_children = structure_json[f_index].children.length;
		}catch(e){
			fs.writeFile(folderPath,'', (error_writing_file)=>{
				if(!error_writing_file){
					console.log('+ ',folderPath);
				}
			});
			continue;
		}
		makeFolder(folderPath);
		if(structure_json[f_index].children.length > 0){
			structureGenerator(structure_json[f_index].children, folderPath+'/');
		}
	}
}

function makeFolder(folder_path){
	mkdirp(folder_path, (err)=>{
		if(err) console.error(err);
		else console.log('+ ', folder_path);
	});
}

module.exports = generateStructure;
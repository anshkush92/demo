const fs = require("fs");

const uuid = require("uuid");

const read_file_data_json_object = require("./read-file-data");

function write_file_data_json(file_name, data_entered) {

    let file_path = read_file_data_json_object.read_file_data_json(file_name).file_path;
    let read_file_data_json = read_file_data_json_object.read_file_data_json(file_name).read_file_data_json_format;

    data_entered.id = uuid.v4();
    read_file_data_json.push(data_entered);

    fs.writeFileSync(file_path, JSON.stringify(read_file_data_json));
}

module.exports = {
    write_file_data_json: write_file_data_json
}
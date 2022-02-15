const path = require("path");

const fs = require("fs");

function read_file_data_json(file_name) {
    let file_path = path.join(__dirname, "../", "data", file_name);

    let read_file_data_raw_format = fs.readFileSync(file_path);
    let read_file_data_json_format = JSON.parse(read_file_data_raw_format);

    return {
        file_path: file_path,
        read_file_data_json_format: read_file_data_json_format
    };
}

module.exports = {
    read_file_data_json: read_file_data_json
}
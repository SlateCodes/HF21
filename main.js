function main(args) {

    const { execSync } = require("child_process");
    const result = await execSync("ls").toString();

    return result;

}

main("ls");

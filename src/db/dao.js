/**
 * 插入
 */
function insert(Model, info) {
    if(!Model || !info) {
        return;
    }

    var model = new Model(info);

    model.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

module.exports = {
    insert
};

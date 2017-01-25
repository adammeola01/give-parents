module.exports = function(parent, cb) {
    var c1 = 0;
    var c2 = 0;
    function adopt(parent) {
        c1++;
        for (var bastard in parent) {
            if (typeof parent[bastard] === 'object' && bastard !== 'parent') {
                parent[bastard].parent = parent;
                adopt(parent[bastard]);
            }
        }
    }
    adopt(parent);
    var doneCheck = setInterval(function() {
        if (c1 == c2) {
            clearInterval(doneCheck);
            cb();
        }
        c2 = c1 * 1;
    }, 5);
};

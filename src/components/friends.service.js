var FriendsService = (function () {
    function FriendsService() {
    }
    FriendsService.prototype.getUsers = function () {
        return Promise.resolve(data);
    };
    FriendsService.prototype.getUser = function (id) {
        return Promise.resolve(data)
            .then(function (characters) {
            return "Chintan";
        });
    };
    return FriendsService;
})();
var data = ['Chintan', 'Patel'];
//# sourceMappingURL=friends.service.js.map
var TicketApproversUtils = Class.create();
TicketApproversUtils.prototype = {
    initialize: function() {
		this.HELPER = new TicketApproversHelper();
    },
	
	getApprovals: function (id){
		return this.HELPER.getApprovals(id);
	},

    type: 'TicketApproversUtils'
};

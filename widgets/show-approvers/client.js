function attachMate($scope, nowAttachmentHandler, $rootScope, spUtil, spModal, $log, spAriaUtil,$document) {
	var c = this;
	
	spUtil.recordWatch($scope, "sysapproval_approver", "sysapproval="+c.data.sys_id, function(name, data) {
		 c.server.get().then(function(resp){
			 c.data.hasApproval = resp.data.hasApproval;
			 c.data.hasGroupApproval = resp.data.hasGroupApproval;
			 c.data.sys_id = resp.data.sys_id;
			 c.data.approvals = resp.data.approvals;
		 });
	});
}

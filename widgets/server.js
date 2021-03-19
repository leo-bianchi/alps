(function() {
	data.hasApproval = true;
	data.hasGroupApproval = true;
	data.sys_id = $sp.getParameter('sys_id');
	data.approvals = new TicketApproversUtils().getApprovals(data.sys_id);
	
	if(!data.approvals.approvers){
		 data.hasGroupApproval = false;
	} else {
		if(!data.approvals.approvers.length){
			data.hasGroupApproval = false;
		}
	}
	if(!data.approvals.groups){
		 data.hasApproval = false;
	} else {
		if(!data.approvals.groups.length){
			data.hasApproval = false;
		}
	}
})();

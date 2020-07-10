	

	function DQsearchAct(searchTerm)		//�α�,��õ�˻��� �˻� �Լ�
	{
		var f = document.searchForm;
		f.searchTerm.value = searchTerm;
		f.collection.value = "";
	    f.search_sdate.value = "";
        f.search_edate.value = "";

		f.submit();

	}	

	//------ �������̵� -----
	function DQ_pagemove(param){
		document.pageNavigator.currentPage.value=param;
		document.pageNavigator.submit();
	}

	
	//----- �޴��̵��� -----
	function DQmenu_Submit(collection){
		document.pageNavigator.collection.value = collection;
		//document.pageNavigator.orderBy.value = "";		//�Ǵ������� ��������
		document.pageNavigator.submit();
	}

		/*
        * �޷� ���͸� ��ü ����
        */
        function date_select_all() {
            var f = document.searchForm; 
            f.search_sdate.value = "";
            f.search_edate.value = "";
        }
        function padZero2(num, leng) {
            var zero = leng - ("" + num).length;
            if (typeof (num) == "number" && zero > 0) {
                var tmp = "";
                for (var i = 0; i < zero; i++) tmp += "0";
                return tmp + num;
            }
            else return num;
        }


	    /*
        * �޷� ���͸� 1����1��,3��..����
        */
        function date_select(type) {
            var f = document.searchForm; 
            var today = new Date();
            var today_year = today.getYear();
            var today_month = today.getMonth() + 1;
            var today_date = today.getDate();
            var from;
            var to;

            if (type == 1) {//1����
                var year = today_year;
                var month = today_month;
                var date = today_date - 7;

                var month_len = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                month_len[1] = (((today_year % 100 != 0) && (today_year % 4 == 0)) || (today_year % 400 == 0)) ? 29 : 28;

                if (date <= 0) {
                    if (month == 1) {
                        date = month_len[11] + date;
                        month = 12;
                        year = year - 1;
                    }
                    else {
                        date = month_len[month - 2] + date;
                        month = month - 1;
                    }
                }

                from = year + "" + padZero2(month, 2) + "" + padZero2(date, 2);
                to = today_year + "" + padZero2(today_month, 2) + "" + padZero2(today_date, 2);
            }
            else if (type == 2) {//1����
                var year = today_year;
                var month = today_month - 1;
                if (month == 0) {
                    month = 12;
                    year = year - 1;
                }

                from = year + "" + padZero2(month, 2) + "" + padZero2(today_date, 2);
                to = today_year + "" + padZero2(today_month, 2) + "" + padZero2(today_date, 2);
            }
            
            f.search_sdate.value = from;
            f.search_edate.value = to;
        }





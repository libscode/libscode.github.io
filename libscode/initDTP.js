$(document).ready(function()
{
	$("#DateTime").DateTimePicker(
	{
		dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
		shortDayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
		fullDayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
		shortMonthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "Desember"],
		fullMonthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "Desember"],
		titleContentDateTime: "",
		setButtonContent: "Masukkan",
		clearButtonContent: "Kosongkan",
	});
	$("#Date").DateTimePicker(
	{
		dateFormat: "yyyy-MM-dd",
		shortDayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
		fullDayNames: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"],
		shortMonthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "Desember"],
		fullMonthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Augustus", "September", "October", "November", "Desember"],
		titleContentDate: "",
		setButtonContent: "Masukkan",
		clearButtonContent: "Kosongkan",
	});
	$("#Time").DateTimePicker(
	{
		timeFormat: "HH:mm",
		titleContentTime: "Pukul",
		setButtonContent: "Masukkan",
		clearButtonContent: "Kosongkan",
	});
});
const sendTelegramm = async (text: string): Promise<void> => {
	const chat_id: number = -752892130
	try {
		await fetch(
			`https://api.telegram.org/bot1692561412:AAFhPdjYADl-rwGpHY5SZcqtHZtSUR0f_Bw/sendMessage?chat_id=${chat_id}&text=${text}`,
		)
	} catch (error) {
		throw new Error(`Ошибка в отправке сообщения`)
	}
}

export default sendTelegramm

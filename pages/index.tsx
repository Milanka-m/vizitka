/* eslint-disable @next/next/no-page-custom-font */
import React from "react"
import Head from "next/head"
import Box from "@mui/material/Box"
import ProductSmokingHero from "../modules/views/ProductSmokingHero"
import ProductCategories from '../modules/views/ProductCategories';
import AppFooter from "../modules/views/AppFooter"
import ProductHero from "../modules/views/ProductHero"
import ProductValues from "../modules/views/ProductValues"
import ProductHowItWorks from "../modules/views/ProductHowItWorks"
import ProductPrice from "../modules/views/ProductPrice"
import ProductCTA from "../modules/views/ProductCTA"
import AppAppBar from "../modules/views/AppAppBar"
import AppForm from "../modules/views/AppForm"
import ProductCard from "../modules/views/ProductCard"
import CardImage from "../modules/views/CardImage"
import { phone, required } from "../modules/form/validation"
import { Field, Form, FormSpy } from "react-final-form"
import RFTextField from "../modules/form/RFTextField"
import FormButton from "../modules/form/FormButton"
import FormFeedback from "../modules/form/FormFeedback"
import withRoot from "../modules/withRoot"
import Popup from "../modules/views/Popup"
import Snackbar from "../modules/components/Snackbar"
import cardsData from "../modules/data/products"
import imagesData from "../modules/data/images"
import { IProducts, IImages } from "../types"
import { sendTelegramm } from "../utils"
import { GetServerSideProps } from "next"

interface IIndexProps {
	cards: IProducts[]
	images: IImages[]
}

const Index: React.FC<IIndexProps> = ({ cards, images }) => {
	const [initialCards, setInitialCards] = React.useState<IProducts[]>(cards)
	const [initialImages, setinitialImages] = React.useState<IImages[]>(images)
	const [selectedCard, setSelectedCard] = React.useState<IProducts>({})
	const [selectedImage, setSelectedImage] = React.useState<IImages>({})
	const [openPopupForm, setOpenPopupForm] = React.useState<boolean>(false)
	const [openPopupCard, setOpenPopupCard] = React.useState<boolean>(false)
	const [openPopupImage, setOpenPopupImage] = React.useState<boolean>(false)
	const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)

	const handleClickOpenPopupForm = (): void => {
		setOpenPopupForm((pre) => !pre)
	}

	const handleClosePopupForm = (): void => {
		setOpenPopupForm((pre) => !pre)
	}

	const handleClickOpenPopupCard = (param: object): void => {
		setOpenPopupCard((pre) => !pre)
		setSelectedCard(param)
	}

	const handleClosePopupCard = (): void => {
		setOpenPopupCard((pre) => !pre)
	}

	const handleClickOpenForm = (): void => {
		setOpenPopupForm((pre) => !pre)
		setOpenPopupCard((pre) => !pre)
	}

	const handleClickOpenPopupImage = (param: object): void => {
		setOpenPopupImage((pre) => !pre)
		setSelectedImage(param)
	}

	const handleClosePopupImage = (): void => {
		setOpenPopupImage((pre) => !pre)
	}

	const handleCloseSnackBar = (): void => {
		setOpenSnackBar((pre) => !pre)
	}

	const validate = (values: { [index: string]: string }) => {
		const errors = required(["firstName", "phone"], values)

		if (!errors.phone) {
			const phoneError = phone(values.phone)
			if (phoneError) {
				errors.phone = phoneError
			}
		}

		return errors
	}

	const handleSubmit = (values: { [name: string]: string }): void => {
		sendTelegramm(
			`Оформление заказа/услуги. %0AИмя: ${values.firstName}%0AТелефон: ${values.phone}`,
		)
		setSent((pre) => !pre)
		setOpenPopupForm((pre) => !pre)
		setOpenSnackBar((pre) => !pre)
	}

	return (
		<React.Fragment>
			<Head>
				<title>Digital-агентство Skillfond | Создание и продвижение сайтов в Белгороде</title>
				<meta
					name='description'
					content='Создание и раскрутка сайтов под ключ, интернет маркетинг и настройка бизнес-процесов. Диджитал-агентство Skillfond: разработка и продвижение сайтов в Белгороде ☎️ 8 4722 777 235.'
				/>
				<meta name='og:title' content='Digital-агентство Skillfond | Создание и продвижение сайтов в Белгороде' />
				<link
					href='https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap'
					rel='stylesheet'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AppAppBar />
			<ProductHero 
				handleClickOpen={handleClickOpenPopupForm} 
			/>
			<ProductValues />
			{cards && cards.length > 0 ? (
				<ProductPrice
					initialCards={initialCards}
					title='Найдите свой тур'
					handleClickOpen={handleClickOpenPopupCard}
				/>
			) : (
				<></>
			)}
			<ProductCategories 
				initialImages={initialImages} 
				handleClickOpen={handleClickOpenPopupImage}
			/>
			<ProductHowItWorks />
			<ProductCTA />
			<ProductSmokingHero />
			<AppFooter />
			<Popup 
				open={openPopupCard}
				onClose={handleClosePopupCard}
			>
				{selectedCard && selectedCard !== {} 
				? 
					<ProductCard
						title={selectedCard.title}
						description={selectedCard.description}
						paragraph1={selectedCard.paragraph1}
						paragraph2={selectedCard.paragraph2}
						paragraph3={selectedCard.paragraph3}
						idButtonCard={selectedCard.idButtonCard}
						poster={selectedCard.poster}
						newPrice={selectedCard.newPrice}
						oldPrice={selectedCard.oldPrice}
						handleClickOpen={handleClickOpenForm} 
					/>
				: 
					<></>
				}
				
			</Popup>
			<Popup 
				open={openPopupImage}
				onClose={handleClosePopupImage}
			>
				{selectedImage && selectedImage !== {}
				? 
					<CardImage
						url={selectedImage.url}
						title={selectedImage.title}
				    />
				: <></>
				}
			</Popup>
			<Popup 
				open={openPopupForm} 
				onClose={handleClosePopupForm}
			>
				<AppForm>
					<Form
						onSubmit={handleSubmit}
						subscription={{ submitting: true }}
						validate={validate}>
						{({ handleSubmit: handleSubmit2, submitting }) => (
							<Box
								component='form'
								onSubmit={handleSubmit2}
								noValidate
								sx={{ 
									mt: 2, 
									borderRadius: 2,
								}}
							>
								<Field
									sx={{[`& input`]: {
										borderRadius: 2,
									}}}
									autoFocus
									component={RFTextField}
									disabled={submitting || sent}
									autoComplete='given-name'
									fullWidth
									label='Имя'
									name='firstName'
									required
								/>
								<Field
									sx={{[`& input`]: {
										borderRadius: 2,
									}}}
									fullWidth
									component={RFTextField}
									disabled={submitting || sent}
									autoComplete='Phone'
									label='Телефон'
									margin='normal'
									name='phone'
									required
								/>
								
								<FormSpy subscription={{ submitError: true }}>
									{({ submitError }) =>
										submitError ? (
											<FormFeedback error sx={{ mt: 2 }}>
												{submitError}
											</FormFeedback>
										) : null
									}
								</FormSpy>
								<FormButton
									sx={{ 
										mt: 3, 
										mb: 2,
										borderRadius: 2 
									}}
									disabled={submitting || sent}
									color='secondary'
									fullWidth
								>
									{submitting || sent ? "Отправлено" : "Заказать звонок"}
								</FormButton>
							</Box>
						)}
					</Form>
				</AppForm>
			</Popup>
			<Snackbar
				open={openSnackBar}
				closeFunc={handleCloseSnackBar}
				message='В ближайшее время с Вами свяжется наш специалист!'
			/>
		</React.Fragment>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cards: IProducts[] = cardsData
	const images: IImages[] = imagesData
	return {
		props: {
			cards,
			images,
		},
	}
}

export default withRoot(Index)

<template>
	<div class="wrapper">
		<Sidebar_Comp />

		<div class="main">
			<Navbar_Comp />

			<main class="content">
				<div class="container-fluid p-0">
					<h1 class="h3 mb-3"><strong>Settings</strong></h1>

					<div class="row">
						<div class="col-md-3 col-xl-2">
							<div class="card">
								<div class="card-header">
									<h5 class="card-title mb-0">Profile Settings</h5>
								</div>

								<div class="list-group list-group-flush" role="tablist">
									<a class="list-group-item list-group-item-action active" data-bs-toggle="list"
										href="#parameter" role="tab">
										Parameter
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list"
										href="#account" role="tab">
										Account
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list"
										href="#password" role="tab">
										Password
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#"
										role="tab">
										Privacy and safety
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#"
										role="tab">
										Email notifications
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#"
										role="tab">
										Web notifications
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#"
										role="tab">
										Widgets
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#"
										role="tab">
										Your data
									</a>
									<a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#"
										role="tab">
										Delete account
									</a>
								</div>
							</div>
						</div>

						<div class="col-md-9 col-xl-10">
							<div class="tab-content">
								<div class="tab-pane fade show active" id="parameter" role="tabpanel">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Add New Parameter</h5>

											<form>
												<div class="mb-3">
													<label class="form-label" for="inputparamid">Param ID</label>
													<input type="text" class="form-control" id="inputparamid"
														v-model="param.id">
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputparamname">Param Name</label>
													<input type="text" class="form-control" id="inputparamname"
														v-model="param.name">
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputparamicon">Param Icon</label>
													<input type="text" class="form-control" id="inputparamicon"
														v-model="param.icon">
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputparamvalue">Param Value</label>
													<input type="text" class="form-control" id="inputparamvalue"
														v-model="param.value">
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputparamtrend">Param Trend</label>
													<input type="text" class="form-control" id="inputparamtrend"
														v-model="param.trend">
												</div>

												<button type="submit" class="btn btn-primary" @click="pemesanan">
													Save changes
												</button>
											</form>

										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="account" role="tabpanel">

									<div class="card">
										<div class="card-header">

											<h5 class="card-title mb-0">Public info</h5>
										</div>
										<div class="card-body">
											<form>
												<div class="row">
													<div class="col-md-8">
														<div class="mb-3">
															<label class="form-label"
																for="inputUsername">Username</label>
															<input type="text" class="form-control" id="inputUsername"
																placeholder="Username">
														</div>
														<div class="mb-3">
															<label class="form-label"
																for="inputUsername">Biography</label>
															<textarea rows="2" class="form-control" id="inputBio"
																placeholder="Tell something about yourself"></textarea>
														</div>
													</div>
													<div class="col-md-4">
														<div class="text-center">
															<img alt="Charles Hall" src="img/avatars/avatar.jpg"
																class="rounded-circle img-responsive mt-2" width="128"
																height="128">
															<div class="mt-2">
																<span class="btn btn-primary"><i
																		class="fas fa-upload"></i> Upload</span>
															</div>
															<small>For best results, use an image at least 128px by
																128px in .jpg format</small>
														</div>
													</div>
												</div>

												<button type="submit" class="btn btn-primary">Save changes</button>
											</form>

										</div>
									</div>

									<div class="card">
										<div class="card-header">

											<h5 class="card-title mb-0">Private info</h5>
										</div>
										<div class="card-body">
											<form>
												<div class="row">
													<div class="mb-3 col-md-6">
														<label class="form-label" for="inputFirstName">First
															name</label>
														<input type="text" class="form-control" id="inputFirstName"
															placeholder="First name">
													</div>
													<div class="mb-3 col-md-6">
														<label class="form-label" for="inputLastName">Last name</label>
														<input type="text" class="form-control" id="inputLastName"
															placeholder="Last name">
													</div>
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputEmail4">Email</label>
													<input type="email" class="form-control" id="inputEmail4"
														placeholder="Email">
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputAddress">Address</label>
													<input type="text" class="form-control" id="inputAddress"
														placeholder="1234 Main St">
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputAddress2">Address 2</label>
													<input type="text" class="form-control" id="inputAddress2"
														placeholder="Apartment, studio, or floor">
												</div>
												<div class="row">
													<div class="mb-3 col-md-6">
														<label class="form-label" for="inputCity">City</label>
														<input type="text" class="form-control" id="inputCity">
													</div>
													<div class="mb-3 col-md-4">
														<label class="form-label" for="inputState">State</label>
														<select id="inputState" class="form-control">
															<option selected="">Choose...</option>
															<option>...</option>
														</select>
													</div>
													<div class="mb-3 col-md-2">
														<label class="form-label" for="inputZip">Zip</label>
														<input type="text" class="form-control" id="inputZip">
													</div>
												</div>
												<button type="submit" class="btn btn-primary">Save changes</button>
											</form>

										</div>
									</div>

								</div>
								<div class="tab-pane fade" id="password" role="tabpanel">
									<div class="card">
										<div class="card-body">
											<h5 class="card-title">Password</h5>

											<form>
												<div class="mb-3">
													<label class="form-label" for="inputPasswordCurrent">Current
														password</label>
													<input type="password" class="form-control"
														id="inputPasswordCurrent">
													<small><a href="#">Forgot your password?</a></small>
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputPasswordNew">New
														password</label>
													<input type="password" class="form-control" id="inputPasswordNew">
												</div>
												<div class="mb-3">
													<label class="form-label" for="inputPasswordNew2">Verify
														password</label>
													<input type="password" class="form-control" id="inputPasswordNew2">
												</div>
												<button type="submit" class="btn btn-primary">Save changes</button>
											</form>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</main>
			<Footer_Comp />
		</div>
	</div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Sidebar_Comp from "@/components/Sidebar.vue";
import Navbar_Comp from "@/components/Navbar.vue";
import Footer_Comp from "@/components/Footer.vue";

export default {
	name: "Setting_View",
	components: {
		Sidebar_Comp,
		Footer_Comp,
		Navbar_Comp,
	},
	data() {
		return {
			products: [],
			param: {}
		};
	},
	methods: {
		setProducts(data) {
			this.products = data;
		},
		pemesanan() {
			axios
				.post("http://localhost:3000/dashboard-items", this.param)
				.then(() => {
					this.$router.go({ path: "/" })
					this.$toast.success("Sukses Menambahkan", {
						type: "success",
						position: "top-right",
						duration: 3000,
						dismissible: true,
					});
				})
				.catch((err) => console.log(err));
		},
	},
	mounted() {
		axios
			.get(process.env.VUE_APP_ROOT_API + "/products")
			.then((response) => this.setProducts(response.data))
			.catch((error) => console.log(error));
	},
};
</script>
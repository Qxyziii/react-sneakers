function Header () {
    return(
        <header className="d-flex justify-between align-center p-40">
				<div className="d-flex align-center">
					<img height={40} width={40} src="/img/logo.png"></img>
					<div>
						<h3 className="text-uppercase">React Sneakers</h3>
						<p className="opacity-5">Магазин лучших кросовок</p>
					</div>
				</div>
				<ul className="d-flex">
					<li className="mr-30">
						<img src="/img/card.svg"></img>
						<span> 1205 руб. </span>
					</li>
					<li>
						<img src="/img/user.svg"></img>
					</li>
				</ul>
			</header>
    );
}
export default Header;
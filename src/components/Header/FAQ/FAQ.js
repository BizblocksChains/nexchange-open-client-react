import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import QuestionAnswer from './QuestionAnswer/QuestionAnswer';

class FAQ extends Component {
  state = {
    show: false,
  };

  componentDidUpdate() {
    if (this.state.show !== this.props.show) {
      this.setState({
        show: this.props.show,
      });
    }
  }

  render() {
    return (
      <I18n ns="translations">
        {t => (
          <Modal show={this.state.show} onHide={this.props.onClose}>
            <div id="faq" className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.props.onClose}>
                  <i className="material-icons">clear</i>
                </button>
              </div>

              <div className="modal-body">
                <QuestionAnswer
                  id="ques1"
                  answer={
                    <Trans i18nKey="faq.ans1">
                      <div>
                        <p>
                          N.exchange is an automated cryptocurrency exchange service, operated by
                          <a href="https://beta.companieshouse.gov.uk/company/10009845" target="_blank" rel="noopener noreferrer">
                            YOA LTD. (registered company No. 10009845)
                          </a>.
                        </p>
                        <p>
                          Our VAT number - GB233 5420 37.<br />Our registered office address - Suite 11, Penhurst House, 352-254 Battersea
                          Park Road, London, England, SW11 3BY.
                        </p>
                        <p>
                          Our customer support phone number in UK is <a href="tel:+442081442192">+442081442192</a>.
                        </p>
                      </div>
                    </Trans>
                  }
                />

                <QuestionAnswer
                  id="ques2"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans2">
                        <p>
                          We allow you to exchange one cryptocurrency for another. To view our currently supported coins, please click on
                          the coin selection widget in the top of fold of the page.
                        </p>
                        <p>We will be adding more currencies very soon, stay tuned!</p>
                        <p>
                          Missing your favorite coin? Let us know here: <a href="mailto:support@n.exchange">support@n.exchange</a>.
                        </p>
                      </Trans>
                    </div>
                  }
                />

                <QuestionAnswer
                  id="ques3"
                  answer={
                    <Trans i18nKey="faq.ans3">
                      <p>
                        Our service fee is 0.5%. There are no hidden fees here: the amount you see on the screen is the exact amount you get
                        in your wallet.
                      </p>
                    </Trans>
                  }
                />

                <QuestionAnswer
                  id="ques4"
                  answer={
                    <Trans i18nKey="faq.ans4">
                      <p>
                        Initiating a transaction doesn’t take more than a couple of minutes. The actual processing takes about 10–60 minutes
                        before you receive your coins in your desired currency. The transaction time depends on the selected currencies and
                        their respective blockchains.
                      </p>
                    </Trans>
                  }
                />

                <QuestionAnswer
                  id="ques5"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans5">
                        <p>Here is how you use the exchange:</p>
                        <ol>
                          <li>
                            <b>Enter</b> your desired <b>amount, choose</b> the currency type you
                            <b>want to spend</b>, and the currency type you <b>want to buy</b> (e.g. if you want to spend 1 BTC to buy ETH
                            at the exchange rate shown, you enter “1” and click on “GET STARTED”)
                            <img src="/img/faq/step1.png" alt="How does it work, step 1" />
                          </li>
                          <li>
                            <b>Enter your destination address</b> (e.g. if you are buying ETH, you enter your ETH wallet address)
                            <img src="/img/faq/step2.png" alt="How does it work, step 2" />
                          </li>
                          <li>
                            You will be prompted to <b>send</b> your coins to a <b>specified address</b>.
                            <img src="/img/faq/step3.png" alt="How does it work, step 3" />
                          </li>
                          <li>Once we receive your coins, the processing of your order will start immediately.</li>
                          <li>
                            Once everything is done, you will receive your ETH. Hurray! You just successfully exchanged your cryptocurrency.
                          </li>
                        </ol>
                        <p>
                          Once you have paid for your order, it cannot be reversed. Please ensure that you have put in the right address.
                        </p>
                      </Trans>
                    </div>
                  }
                />

                <QuestionAnswer
                  id="ques6"
                  answer={
                    <Trans i18nKey="faq.ans6">
                      <p>
                        For cryptocurrency only exchange orders , We do not collect or store any private information about you. The process
                        is completely anonymous. For FIAT (USD,GBP,EUR etc) orders we do a strict compliance according to best KYC/AML
                        standards out there.{' '}
                      </p>
                    </Trans>
                  }
                />

                <QuestionAnswer id="ques7" answer={<img src="/img/verification.png" alt="Verification" />} />

                <QuestionAnswer
                  id="ques8"
                  answer={
                    <Trans i18nKey="faq.ans8">
                      <p>No, our solution is completely independant. We use our internal coin reserves to provide liquidity.</p>
                    </Trans>
                  }
                />

                <QuestionAnswer
                  id="ques9"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans9">
                        <p>We do not provide wallet hosting service at the moment. The exchange happens between two of your wallets:</p>
                        <ol>
                          <li>
                            The wallet you send the funds from (<b>spending</b> wallet)
                          </li>
                          <li>
                            The wallet you receive funds to (<b>receiving</b> wallet)
                          </li>
                        </ol>
                        <p>Once the transaction has been processed, you are in charge of your wallet balance security.</p>
                      </Trans>
                    </div>
                  }
                />

                <QuestionAnswer
                  id="ques10"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans10">
                        <p>Every order has a unique id like this:</p>
                        <img src="/img/faq/faq.png" style={{ margin: '10px 0' }} alt="Order ID example" />
                        <p>Make sure you record your order id. We recommend bookmarking the page, you can always navigate to it later.</p>
                        <p>
                          Once you have sent the cryptocurrency, losing connection, closing the tab or navigating elsewhere will not impact
                          the transaction.
                        </p>
                        <p>If you need help, feel free to contact us.</p>
                      </Trans>
                    </div>
                  }
                />

                <QuestionAnswer
                  id="ques11"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans11">
                        <p>Whenever you create an order, a referral code is automatically generated for you.</p>
                        <p>Current referral conditions are as follows:</p>
                        <ol>
                          <li>
                            We pay half of our revenues to the affiliates. One fourth of revenues for 2nd degree affiliates and one eighth
                            of revenues for 3rd degree affiliates.
                          </li>
                          <li>
                            We send referral payouts once the funds accumulated on your account reach the threshold. The treshold amount is
                            typically 10 times the minimal order amount (no tx fee), but it can be adjusted downward, in which case, you
                            would need to cover the tx fee yourself.
                          </li>
                          <li>You will be receiving your funds to the withdraw address specified on this order.</li>
                          <li>
                            If you would like to change withdrawal address or preferred currency, let us know in support, and we will take
                            care of it.
                          </li>
                        </ol>
                        <p>These are subject to change at any time.</p>
                      </Trans>
                    </div>
                  }
                />

                <QuestionAnswer
                  id="ques12"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans12">
                        <p>
                          There's a 15-minute window between the moment you open the order and the moment we detect the coins that you sent
                          on the blockchain. During this time interval, we effectively freeze the price for your order.
                        </p>
                        <p>
                          If the 15 minute time window closes, the order is canceled because the price will have expired and will need to be
                          recalculated.
                        </p>
                        <p>If you did not send your funds in time, simply initiate a new order.</p>
                        <p>
                          If you did send your funds, but for some reason they were not detected, contact us through the support chat and we
                          will help you out.
                        </p>
                      </Trans>
                    </div>
                  }
                />

                <QuestionAnswer
                  id="ques13"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans13">
                        <p>
                          Yes. Promote N.exchange on social media (such as Twitter). We would pay you 1000 SAT for every retweet from a
                          legitimate, real account with over 500 followers and 100 SAT for each like from an account of the same criteria.
                        </p>

                        <p>
                          <b>We reserve the right to deny the bonus coins on any grounds we see fit.</b>
                        </p>
                      </Trans>
                    </div>
                  }
                />

                <QuestionAnswer
                  id="ques14"
                  answer={
                    <div>
                      <Trans i18nKey="faq.ans14">
                        <p>
                          In order to use N.exchange, you need to have your own wallet. The main upside of this feature is that we don’t
                          hold your coins, and thus you retain full control over your assets at all times.
                        </p>
                        <p>If you need some help obtaining a wallet for your desired cryptocurrency, please look here:</p>
                        <ul>
                          <li>
                            Bitcoin (BTC): <a href="https://bitcoin.org/en/choose-your-wallet">https://bitcoin.org/en/choose-your-wallet</a>
                          </li>
                          <li>
                            Ethereum (ETH):{' '}
                            <a href="https://github.com/ethereum/mist/releases">https://github.com/ethereum/mist/releases</a>
                          </li>
                          <li>
                            Litecoin (LTC): <a href="https://litecoin.org/">https://litecoin.org/</a>
                          </li>
                        </ul>

                        <p>
                          Please note that we are not affiliated with the websites mentioned above, these links are for user’s reference
                          purposes only. We will not accept any liability, obligation or responsibility whatsoever for the content of
                          external websites.
                        </p>
                      </Trans>
                    </div>
                  }
                />
              </div>
            </div>
          </Modal>
        )}
      </I18n>
    );
  }
}

export default FAQ;

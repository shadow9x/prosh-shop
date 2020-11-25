import React, { useState } from 'react';
import md5 from 'md5';

class NL_Checkout {
  constructor() {
    this.nganluong_url = 'https://www.nganluong.vn/checkout';
    this.merchant_site_code = '275';
    this.secure_pass = '12345';
    this.affiliate_code = '';
  }

  buildCheckoutUrlExpand(return_url, receiver, transaction_info, order_code, price, currency = 'vnd', quantity = 1, tax = 0, discount = 0, fee_cal = 0, fee_shipping = 0, order_description = '', buyer_info = '', affiliate_code = '') {
    if (affiliate_code === '') affiliate_code = this.affiliate_code;
    let arr_param = {
      merchant_site_code: this.merchant_site_code,
      return_url,
      receiver,
      transaction_info,
      order_code,
      price,
      currency,
      quantity,
      tax,
      discount,
      fee_cal,
      fee_shipping,
      order_description,
      buyer_info,
      affiliate_code
    }
    let secure_code = '';
    secure_code = Object.values(arr_param).join(' ') + ' ' + this.secure_pass;
    arr_param.secure_code = md5(secure_code)
    let redirect_url = this.nganluong_url;
    if (redirect_url.indexOf('?') === -1) {
      redirect_url += '?';
    } else if (redirect_url.indexOf('&') === -1) {
      redirect_url += '&';
    }
    let url = '';
    for (var key in arr_param) {
      let value = encodeURIComponent(arr_param[key]);
      if (url === '') {
        url += key + '=' + value;
      } else {
        url += '&' + key + '=' + value;
      }
    }
    return redirect_url + url;
  }

  buildCheckoutUrl(return_url, receiver, transaction_info, order_code, price) {
    let arr_param = {
      merchant_site_code: this.merchant_site_code,
      return_url,
      receiver,
      transaction_info,
      order_code,
      price
    };
    let secure_code = '';
    secure_code = Object.values(arr_param).join(' ') + ' ' + this.secure_pass;
    arr_param['secure_code'] = md5(secure_code);
    let redirect_url = this.nganluong_url;
    if (redirect_url.indexOf('?') === -1) {
      redirect_url += '?';
    } else if (redirect_url.indexOf('&') === -1) {
      redirect_url += '&';
    }
    let url = '';
    for (var key in arr_param) {
      let value = encodeURIComponent(arr_param[key]);
      if (url === '') {
        url += key + '=' + value;
      } else {
        url += '&' + key + '=' + value;
      }
    }
    return redirect_url + url;
  }

  verifyPaymentUrl() {

  }

  getTransactionDetail() {

  }
  processPayment(order) {
    const txh_name = order.user.name;
    const txt_email = order.user.email;
    const txt_phone = order.user.phone ? order.user.phone : '';
    const price = order.totalPrice;
    let NGANLUONG_URL = 'https://www.nganluong.vn/checkout.php';
    let RECEIVER = 'demo@nganluong.vn'; //'thjkjnoidi2@gmail.com'; // Email tài khoản Ngân Lượng
    let MERCHANT_ID = '36680'; //'49731'; // Mã kết nối
    let MERCHANT_PASS = 'matkhauketnoi'; //'ad46bb0cba65'; // Mật khẩu kết nối 
    let receiver = RECEIVER;
    let order_code = 'NL_' + (new Date()).getTime();
    let return_url = 'http://' + window.location.hostname + '/success';
    let cancel_url = 'http://' + window.location.hostname;
    let notify_url = 'http://' + window.location.hostname + '/success';
    let transacton_info = 'Proshop Transaction Info';
    let currency = 'usd';
    let quantity = order.orderItems.reduce((acc, orderItem) => acc + orderItem.qty, 0);
    let tax = order.tax;
    let discount = 0;
    let fee_cal = order.shippingPrice > 0;
    let fee_shipping = order.shippingPrice;
    let order_description = 'Thong tin don hang: ' + order_code;
    let buyer_info = txh_name + '*|*' + txt_email + '*|*' + txt_phone;
    let affiliate_code = '';
    let nl = new NL_Checkout();
    nl.nganluong_url = NGANLUONG_URL;
    nl.merchant_site_code = MERCHANT_ID;
    nl.secure_pass = MERCHANT_PASS;
    let url = nl.buildCheckoutUrlExpand(return_url, receiver, transacton_info, order_code, price, currency, quantity, tax, discount, fee_cal, fee_shipping, order_description, buyer_info, affiliate_code);
    if (order_code !== '') {
      url += '&cancel_url=' + cancel_url + '&notify_url=' + notify_url;
      window.open(url, '_black');
    }
  }
}

export default NL_Checkout;



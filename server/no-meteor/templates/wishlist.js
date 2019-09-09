import { html } from "/lib/core/templates";

const StandardTemplate = html`
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width">
  <meta name="x-apple-disable-message-reformatting">
  <style type="text/css">
    .full-width {
      width: 640px;
    }

    table.editor-body {
      width: 100%;
    }

    table.row {
      padding: 0px;
      width: 100%;
      position: relative;
    }

    table.row td.last {
      padding-right: 0px;
    }

    table.columns,
    table.column {
      padding-right: 0;
      margin: 0 auto;
    }

    .el-button table.el-wrapper {
      border-collapse: separate;
    }

    td.wrapper {
      padding: 0;
      position: relative;
    }

    .hide-for-desktop {
      display: none;
      mso-hide: all;
    }

    .hide-for-desktop table,
    .hide-for-desktop td,
    .hide-for-desktop img,
    .hide-for-desktop a {
      mso-hide: all;
    }

    .loop-item>table {
      table-layout: auto;
    }

    @media (max-width: 600px) {
      .hide-for-desktop {
        mso-hide: none;
      }

      table.hide-for-desktop {
        display: table !important;
      }

      td.hide-for-desktop {
        display: table-cell !important;
      }

      img.hide-for-desktop {
        display: block !important;
      }

      a.hide-for-desktop {
        display: block !important;
      }

      table.editor-body img {
        height: auto !important;
      }

      table.editor-body center {
        min-width: 0 !important;
      }

      table.editor-body .row,
      table.editor-body .loop-item {
        width: 100% !important;
        display: block !important;
      }

      table.editor-body .wrapper {
        display: block !important;
        padding-right: 0 !important;
      }

      table.editor-body .loop-item.no-stack,
      table.editor-body .wrapper.no-stack {
        display: table-cell !important;
      }

      table.editor-body .columns,
      table.editor-body .column,
      table.editor-body .column-content {
        table-layout: fixed !important;
        float: none !important;
        width: 100% !important;
        padding-right: 0px !important;
        padding-left: 0px !important;
        display: block !important;
      }

      table.editor-body .wrapper.first .columns,
      table.editor-body .wrapper.first .column {
        display: table !important;
      }

      table.editor-body .hide-for-small,
      .hide-for-mobile,
      table.editor-body .row.hide-for-mobile {
        display: none !important;
        max-height: 0 !important;
        line-height: 0 !important;
        mso-hide: all;
      }

      td.import-element-block,
      .full-width {
        width: 100% !important;
        padding: 0;
      }
    }

    body {
      margin: 0;
      padding: 0;
    }

    .editor-body {
      font-family: "Helvetica", "Helvetica Neue", "Arial", sans-serif;
      margin: 0;
    }

    table {
      border-collapse: collapse;
    }

    ul,
    ol {
      list-style-position: outside;
      margin: 0;
      padding: 0 0 0 2em;
    }

    .header-footer {
      margin: 0;
    }

    .valign {
      vertical-align: top;
    }

    .no-padding {
      padding-right: 0;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: inherit;
      /* Padding-left:0 triggers image scale in outlook */
    }

    .row {
      word-break: break-word;
    }

    .button {
      border: 0;
      border-width: 0;
      border-color: none;
      border-style: none;
      outline: 0;
      box-sizing: border-box;
      display: block;
    }

    .align-left {
      text-align: left;
    }

    .align-right {
      text-align: right;
    }

    /*# sourceMappingURL=/assets/app/shared/html_editor/css/email/full.css.map */
  </style>
  <!--[if gte mso 12]>
        <style>
           ul, ol {
               margin-left:2em !important;
            }
        </style>
    <![endif]-->
  <!--[if gte mso 9]>
        <style>
            table.twentyPercent,
            table.two,
            table.three,
            table.four,
            table.six,
            table.nine {
                width: 100% !important;
            }
        </style>
    <![endif]-->
</head>

<body style="margin: 0;
  padding: 0;">
  <div
    style="padding: 10px; border-bottom: 1px solid #CCC; background: #FFF; font-family:&quot;OpenSans&quot;, &quot;Helvetica&quot;, &quot;Helvetica Neue&quot;, &quot;Arial&quot;, sans-serif;">
    <strong>Subject:</strong> Check out {{userName}} wishlist from Local Eclectic</div>
  <table class="editor-body"
    style="border-collapse:collapse;font-family:&quot;Helvetica&quot;, &quot;Helvetica Neue&quot;, &quot;Arial&quot;, sans-serif;width:100%;">
    <tbody>
      <tr>
        <td align="center" valign="top" style="padding:0;">
          <table class="import-message" border="0" cellpadding="0" cellspacing="0"
            style="font-size:16px;text-align:left;align:center;border-collapse:collapse;">
            <tbody>
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0"
                    class="row import-container import-container-1 import-container-75273119615"
                    style="border-spacing:0px;border-collapse:collapse;word-break:break-word;padding:0px;width:100%;position:relative;">
                    <tbody>
                      <tr>
                        <td class="wrapper  valign " style="vertical-align:top;padding:0;position:relative;">
                          <table class="columns import-column import-column-1"
                            style="width:640px;border-collapse:collapse;padding-right:0;margin:0 auto;" cellpadding="0"
                            cellspacing="0">
                            <tbody>
                              <tr>
                                <td class="column-content valign no-padding"
                                  style="width:640px;vertical-align:top;padding-right:0;padding-top:0;padding-bottom:0;padding-left:inherit;">
                                  <table cellpadding="0" cellspacing="0" width="100%"
                                    style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-1 import-element-12987877099"
                                          style="padding:15px;font-size:16px;text-align:left;line-height:normal;font-family:Helvetica,Arial,sans-serif;width:610px;"
                                          align="left">
                                          <div style="text-align:center;"><span
                                              style="font-family:Palatino,'Palatino Linotype',serif;"><span
                                                style="font-size:10px;">My favorites from Local Eclectic!</span></span>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table width="100%" style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-2 import-element-33019028037 el-outer"
                                          style="align:center;text-align:left;font-size:16px;padding:10px;line-height:normal;margin:auto;text-align:center;font-family:Helvetica,Arial,sans-serif;"
                                          align="center">
                                          <a href="https://www.localeclectic.com/" title="Local Eclectic"
                                            style="display:inline;" target="_blank" border="0">
                                            <img
                                              src="{{emailLogo}}"
                                              alt="Local Eclectic" width="320" class="el-inner image"
                                              style="display:block;margin-right:auto;margin-left:auto;border:none;min-width:50%;max-width:50%;height:auto;">
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table cellpadding="0" cellspacing="0" width="100%"
                                    style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-4 import-element-40323841521"
                                          style="padding:20px;font-size:16px;text-align:left;line-height:normal;font-family:Helvetica,Arial,sans-serif;width:600px;"
                                          align="left">
                                          <div style="text-align:center;"><span
                                              style="font-family:Palatino,'Palatino Linotype',serif;"><span
                                                style="font-size:12px;">Here’s a little list of all the styles I’m
                                                currently crushing on at Local Eclectic! </span></span>
                                          </div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table cellpadding="0" cellspacing="0" width="100%"
                                    style="table-layout:fixed;border-collapse:collapse;" class="el-button">
                                    <tbody>
                                      <tr>
                                        <td
                                          style="align:left;text-align:left;font-size:16px;padding:0;line-height:normal;font-family:Helvetica,Arial,sans-serif;"
                                          class="import-element import-element-block import-element-5 import-element-89481770728 el-outer">
                                          <table align="center" cellpadding="0" cellspacing="0" class="el-wrapper"
                                            style="align:center;text-align:center;background-color:#4a4a4a;color:#FFFFFF;font-family:Helvetica, Arial, sans-serif;text-decoration:none;width:50%;letter-spacing:0.5px;font-weight:bold;line-height:normal;margin-right:auto;margin-left:auto;border-collapse:separate;">
                                            <tbody>
                                              <tr>
                                                <td align="center" class="import-element-block el-width"
                                                  style="padding: 20px; width:640px;"> <a
                                                    style="text-align:center;color:#FFFFFF;font-size:16px;font-family:Helvetica, Arial, sans-serif;text-decoration:none;letter-spacing:0.5px;font-weight:bold;line-height:normal;margin-right:auto;margin-left:auto;border:0;border-width:0;border-color:none;border-style:none;outline:0;box-sizing:border-box;display:block;"
                                                    href="{{wishlistUrl}}" title="Shop My Wishlist" target="_blank"
                                                    class="button el-inner">
                                                    SHOP MY WISHLIST
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table width="100%" style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-6 import-element-58994096876 el-outer el-width"
                                          style="align:left;text-align:left;font-size:1px;height:20px;padding:0;line-height:normal;font-family:Helvetica,Arial,sans-serif;width:100%;"
                                          align="left">
                                          <div class="el-inner"
                                            style="align:left;text-align:left;font-size:1px;height:20px;padding:0;line-height:normal;font-size:1px;line-height:1px;width:100%">
                                            &nbsp;</div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table cellpadding="0" cellspacing="0" width="100%"
                                    style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-7 import-element-64512481304"
                                          style="align:left;text-align:left;font-size:16px;padding:0;line-height:normal;font-family:Helvetica,Arial,sans-serif;width:640px;"
                                          align="left">
                                          <table style="width:100%;table-layout:fixed;border-collapse:collapse;">
                                            <tbody>
                                              <tr style="">
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                              </tr>
                                              <tr style="">
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                              </tr>
                                              <tr style="">
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                                <td style="">
                                                  <div style="word-wrap:break-word;"></div>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table width="100%" style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-8 import-element-42724609069 el-outer"
                                          style="align:left;text-align:left;font-size:16px;padding:20px;line-height:normal;margin-left:0;font-family:Helvetica,Arial,sans-serif;"
                                          align="left">
                                          <img
                                            src="{{productImage}}"
                                            width="600" class="el-inner image"
                                            style="display:block;margin-right:auto;margin-left:auto;border:none;min-width:100%;max-width:100%;height:auto;">
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table width="100%" style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-9 import-element-6509735077 el-outer el-width"
                                          style="align:left;text-align:left;font-size:1px;height:20px;padding:0;line-height:normal;font-family:Helvetica,Arial,sans-serif;width:100%;"
                                          align="left">
                                          <div class="el-inner"
                                            style="align:left;text-align:left;font-size:1px;height:20px;padding:0;line-height:normal;font-size:1px;line-height:1px;width:100%">
                                            &nbsp;</div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table cellpadding="0" cellspacing="0" width="100%"
                                    style="table-layout:fixed;border-collapse:collapse;" class="el-button">
                                    <tbody>
                                      <tr>
                                        <td
                                          style="align:left;text-align:left;font-size:16px;padding:0;line-height:normal;font-family:Helvetica,Arial,sans-serif;"
                                          class="import-element import-element-block import-element-10 import-element-29170315531 el-outer">
                                          <table align="center" cellpadding="0" cellspacing="0" class="el-wrapper"
                                            style="align:center;text-align:center;background-color:#4a4a4a;color:#FFFFFF;font-family:Helvetica, Arial, sans-serif;text-decoration:none;width:50%;letter-spacing:0.5px;font-weight:bold;line-height:normal;margin-right:auto;margin-left:auto;border-collapse:separate;">
                                            <tbody>
                                              <tr>
                                                <td align="center" class="import-element-block el-width"
                                                  style="padding: 20px; width:640px;"> <a
                                                    style="text-align:center;color:#FFFFFF;font-size:16px;font-family:Helvetica, Arial, sans-serif;text-decoration:none;letter-spacing:0.5px;font-weight:bold;line-height:normal;margin-right:auto;margin-left:auto;border:0;border-width:0;border-color:none;border-style:none;outline:0;box-sizing:border-box;display:block;"
                                                    href="{{wishlistUrl}}" title="Shop My Wishlist" target="_blank"
                                                    class="button el-inner">
                                                    SHOP MY WISHLIST
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table width="100%" style="table-layout:fixed;border-collapse:collapse;">
                                    <tbody>
                                      <tr>
                                        <td
                                          class="import-element import-element-block import-element-11 import-element-63876092132 el-outer el-width"
                                          style="align:left;text-align:left;font-size:1px;height:40px;padding:0;line-height:normal;font-family:Helvetica,Arial,sans-serif;width:100%;"
                                          align="left">
                                          <div class="el-inner"
                                            style="align:left;text-align:left;font-size:1px;height:40px;padding:0;line-height:normal;font-size:1px;line-height:1px;width:100%">
                                            &nbsp;</div>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <div style="font-family:monospace;letter-spacing:636px;line-height:0;mso-hide:all" class="hide-for-mobile">&nbsp;
  </div>
  <div style="white-space:nowrap;font:15px monospace;line-height:0;mso-hide:all" class="hide-for-mobile">&nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
  <table class="editor-body"
    style="border-collapse:collapse;font-family:&quot;Helvetica&quot;, &quot;Helvetica Neue&quot;, &quot;Arial&quot;, sans-serif;width:100%;">
    <tbody>
      <tr>
        <td class="no-padding" valign="top" align="center" style="padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: inherit;">
          <table class="import-message" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
            <tbody>
              <tr>
                <td class="no-padding" style="padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: inherit;">
                  <table class="row import-container"
                    style="border-collapse:collapse;word-break:break-word;padding:0px;width:100%;position:relative;">
                    <tbody>
                      <tr>
                        <td class="wrapper valign" style="vertical-align:top;padding:0;position:relative;">
                          <table class="columns full-width" cellpadding="0" cellspacing="0"
                            style="border-collapse:collapse;width:640px;padding-right:0;margin:0 auto;">
                            <tbody>
                              <tr>
                                <td class="column-content valign no-padding full-width"
                                  style="vertical-align:top;width:640px;padding-right:0;padding-top:0;padding-bottom:0;padding-left:inherit;">
                                  <table width="100%" style="border-collapse: collapse;">
                                    <tbody>
                                      <tr>
                                        <td class="import-element import-element-block full-width no-padding"
                                          style="width:640px;padding-right:0;padding-top:0;padding-bottom:0;padding-left:inherit;">
                                          <br>
                                          <font face="helvetica, sans-serif" size="2">Local Eclectic | 118 N Peoria |
                                            Suite 5N | Chicago, IL 60607 | United States</font>
                                          <br>
                                          <font face="helvetica, sans-serif" size="2"><a target="_top"
                                              href="http://bm5150.com/public/webform/render_form/default/4ada658f67df027111efdd25f30c6673/unsub/ebe44h3rtjsq2bvvm545p3mkz3r5q/">Unsubscribe</a>&nbsp;from
                                            future marketing messages from Local Eclectic</font>
                                        </td>
                                        <td class="expander"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  <table class="editor-body">
    <tbody>
      <tr>
        <td class="no-padding" valign="top" align="center">
          <table class="import-message" border="0" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td class="no-padding">
                  <table class="row import-container">
                    <tbody>
                      <tr>
                        <td class="wrapper valign">
                          <table class="columns full-width" cellpadding="0" cellspacing="0">
                            <tbody>
                              <tr>
                                <td class="column-content valign no-padding full-width">
                                  <table width="100%">
                                    <tbody>
                                      <tr>
                                        <td class="import-element import-element-block full-width no-padding"></td>
                                        <td class="expander"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>`;

export default StandardTemplate;

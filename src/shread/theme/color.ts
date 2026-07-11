const primaryBase = "#007ACC"; // Ana marka rengi (VS Code benzeri mavi)

export const color = {
  /**
   * Uygulamanın ana marka rengi.
   * 
   * Kullanım Alanları:
   * - Primary button
   * - Active tab
   * - Selected item
   * - Linkler
   * - Icon vurgu renkleri
   */
  primary: primaryBase,

  /**
   * Ana rengin yumuşatılmış tonu.
   *
   * Kullanım Alanları:
   * - Secondary button background
   * - Badge background
   * - Selected row background
   * - Hover / Pressed state
   */
  primarySoft: "#E8F4FF",

  /**
   * Ana rengin açık tonu.
   *
   * Kullanım Alanları:
   * - Input focus background
   * - Highlight alanları
   * - Bilgilendirme kutuları
   * - Hafif vurgu gereken alanlar
   */
  primaryLight: "#BDE0FF",

  /**
   * Ana rengin koyu tonu.
   *
   * Kullanım Alanları:
   * - Primary text
   * - Hover state
   * - Icon renkleri
   * - Kontrast gereken alanlar
   */
  primaryDark: "#005A99",

  /**
   * Uygulamanın varsayılan sayfa arka plan rengi.
   *
   * Kullanım Alanları:
   * - Screen background
   * - Main container background
   */
  background: "#FFFFFF",

  /**
   * Component yüzey rengi.
   *
   * Kullanım Alanları:
   * - Card
   * - Modal
   * - Dropdown
   * - Panel
   */
  surface: "#F8FAFC",

  /**
   * Varsayılan component kenarlık rengi.
   *
   * Kullanım Alanları:
   * - Input border
   * - Card border
   * - Hafif çerçeveler
   */
  border: "#D7E7F5",

  /**
   * Ayırıcı çizgi rengi.
   *
   * Kullanım Alanları:
   * - List separator
   * - Table row separator
   * - Section divider
   */
  divider: "#EAF2F8",

  text: {

    /**
     * Ana metin rengi.
     *
     * Kullanım Alanları:
     * - Başlıklar
     * - Form label
     * - Ana içerik
     */
    main: "#0F172A",

    /**
     * İkincil metin rengi.
     *
     * Kullanım Alanları:
     * - Açıklama metinleri
     * - Helper text
     * - Metadata
     */
    secondary: "#475569",

    /**
     * Düşük öncelikli metin rengi.
     *
     * Kullanım Alanları:
     * - Placeholder
     * - Disabled text
     * - Tarih / Saat
     */
    muted: "#94A3B8",
  },

  /**
   * Başarılı işlem rengi.
   *
   * Kullanım Alanları:
   * - Success message
   * - Completed status
   * - Positive badge
   */
  success: "#22C55E",

  /**
   * Uyarı rengi.
   *
   * Kullanım Alanları:
   * - Warning message
   * - Attention badge
   * - Pending status
   */
  warning: "#F59E0B",

  /**
   * Hata rengi.
   *
   * Kullanım Alanları:
   * - Error message
   * - Validation error
   * - Delete action
   */
  error: "#EF4444",

  /**
   * Saf beyaz.
   *
   * Kullanım Alanları:
   * - Primary button text
   * - Koyu arka plan üzerindeki metinler
   */
  white: "#FFFFFF",

  /**
   * Saf siyah.
   *
   * Kullanım Alanları:
   * - Overlay
   * - Özel tasarım ihtiyaçları
   * - Debug amaçlı kullanım
   */
  black: "#000000",

};


/**
 *    <View style={{
        backgroundColor: theme.colors.primary,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.primary</Text></View>

      <View style={{
        backgroundColor: theme.colors.primarySoft,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.primarySoft</Text></View>  

      <View style={{
        backgroundColor: theme.colors.primaryDark,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.primaryDark</Text></View>

      <View style={{
        backgroundColor: theme.colors.primaryLight,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.primaryLight</Text></View>

      
      <View style={{
        backgroundColor: theme.colors.border,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.border</Text></View>

      <View style={{
        backgroundColor: theme.colors.divider,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.divider</Text></View>

      <View style={{
        backgroundColor: theme.colors.error,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.error</Text></View>

      <View style={{
        backgroundColor: theme.colors.success,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.success</Text></View>

      <View style={{
        backgroundColor: theme.colors.surface,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.surface</Text></View>

      <View style={{
        backgroundColor: theme.colors.warning,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.warning</Text></View>

      <View style={{
        backgroundColor: theme.colors.text.main,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.text.main</Text></View>

      <View style={{
        backgroundColor: theme.colors.text.muted,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.text.muted</Text></View>

      <View style={{
        backgroundColor: theme.colors.text.secondary,
        width: 200,
        height: theme.spacing.xxxl,
      }}><Text>theme.colors.text.secondary</Text></View>
 */
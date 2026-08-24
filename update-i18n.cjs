const fs = require('fs');

function updateJson(file, key, val) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data[key] = val;
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}

updateJson('src/i18n/en.json', 'usb_dacs', {
  title: 'USB DAC Compatibility',
  description: 'Check if your USB DAC is supported for Bit-Perfect playback in Mellifluous. This list is continuously updated based on community testing.',
  search_placeholder: 'Search by brand or type (e.g. FiiO, Dongle)...',
  no_results: 'No USB DACs found matching "{{query}}".'
});

updateJson('src/i18n/id.json', 'usb_dacs', {
  title: 'Kompatibilitas USB DAC',
  description: 'Periksa apakah USB DAC Anda didukung untuk pemutaran Bit-Perfect di Mellifluous. Daftar ini terus diperbarui berdasarkan pengujian komunitas.',
  search_placeholder: 'Cari berdasarkan merek atau tipe (mis. FiiO, Dongle)...',
  no_results: 'Tidak ada USB DAC yang cocok dengan "{{query}}".'
});

console.log('Translations updated.');
